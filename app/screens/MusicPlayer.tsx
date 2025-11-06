import React, { useState, useRef, useEffect } from "react";
import { Audio } from "expo-av";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { playListData } from "../constants";
import ControlCenter from "../components/ControlCenter";
import SongSlider from "../components/SongSlider";
import SongInfo from "../components/SongInfo";

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);

  const togglePlayPause = async () => {
    if (isPlaying) {
      await sound.current?.pauseAsync();
      setIsPlaying(false);
    } else {
      if (sound.current) {
        await sound.current.playAsync();
        setIsPlaying(true);
      } else {
        await playSound(currentIndex);
      }
    }
  };

  const playSound = async (index: number) => {
    // Stop & unload existing sound (if any)
    if (sound.current) {
      await sound.current.stopAsync();
      await sound.current.unloadAsync();
      sound.current = null;
    }

    // Load and play new sound
    const { sound: newSound } = await Audio.Sound.createAsync(
      playListData[index].uri,
      { shouldPlay: true }
    );

    // Attach event listener for autoplay next
    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        handleNextAuto(); // call auto-next when song finishes
      }
    });

    sound.current = newSound;
    setIsPlaying(true);
  };

  const handleNextAuto = async () => {
    const nextIndex = (currentIndex + 1) % playListData.length;
    setCurrentIndex(nextIndex);
    await playSound(nextIndex);
  };

  const handleNext = async () => {
    const nextIndex = (currentIndex + 1) % playListData.length;
    setCurrentIndex(nextIndex);
    await playSound(nextIndex);
  };

  const handlePrev = async () => {
    const prevIndex =
      currentIndex === 0 ? playListData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    await playSound(prevIndex);
  };

  const currentTrack = playListData[currentIndex];

  return (
    <View style={styles.container}>
      <FlatList
        data={[currentTrack]}
        renderItem={() => (
          <View style={styles.artContainer}>
            <Image
              style={styles.artwork}
              source={{ uri: currentTrack.artwork }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />

      <SongInfo
        title={currentTrack.title}
        artist={currentTrack.artist}
        album={currentTrack.album}
      />

      <SongSlider sound={sound} isPlaying={isPlaying} />

      <ControlCenter
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001d23",
  },
  artContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  artwork: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  info: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  artist: {
    fontSize: 16,
    color: "#BBBBBB",
  },
});

export default MusicPlayer;

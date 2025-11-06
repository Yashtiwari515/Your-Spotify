import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

interface SongSliderProps {
  sound: React.MutableRefObject<Audio.Sound | null>;
  isPlaying: boolean;
}

const SongSlider = ({ sound, isPlaying }: SongSliderProps) => {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isPlaying && sound.current) {
      interval = setInterval(async () => {
        const status = await sound.current?.getStatusAsync();
        if (status && status.isLoaded) {
          setPosition(status.positionMillis / 1000);
          setDuration(status.durationMillis / 1000);
        }
      }, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSeek = async (value: number) => {
    if (sound.current) {
      await sound.current.setPositionAsync(value * 1000);
      setPosition(value);
    }
  };

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        onSlidingComplete={handleSeek}
        thumbTintColor="#FFF"
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#555"
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(position)}</Text>
        <Text style={styles.time}>{formatTime(duration - position)}</Text>
      </View>
    </View>
  );
};

function formatTime(sec: number) {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
  },
  timeContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    color: "#fff",
  },
});

export default SongSlider;

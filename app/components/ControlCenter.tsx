import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ControlCenter = ({ isPlaying, onPlayPause, onNext, onPrev }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPrev}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      <Pressable onPress={onPlayPause}>
        <Icon
          style={styles.icon}
          name={isPlaying ? "pause" : "play-arrow"}
          size={75}
        />
      </Pressable>

      <Pressable onPress={onNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
  icon: {
    color: "#FFFFFF",
    marginHorizontal: 16,
  },
});

export default ControlCenter;

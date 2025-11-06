import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface SongInfoProps {
  title: string;
  artist: string;
  album?: string;
}

const SongInfo = ({ title, artist, album }: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.artist}>
          {artist} {album ? ` · ${album}` : ""}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 18,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  name: {
    marginBottom: 8,
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  artist: {
    color: "#d9d9d9",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SongInfo;

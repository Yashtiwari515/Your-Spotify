import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import MusicPlayer from "./screens/MusicPlayer";

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // simulate loading audio setup
    setTimeout(() => setIsReady(true), 1000);
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#001d23" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});

import React, { useState, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";

const VideoPlayer = ({ uri }) => {
  const player = useVideoPlayer(uri, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  if (!uri) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No video URI provided</Text>
      </View>
    );
  }

  return (
    <>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
          />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "%25",
    maxWidth: "%25",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  // video: {
  //   maxWidth: "50%",
  //   maxHeight: "50%",
  // },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default VideoPlayer;

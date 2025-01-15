// import {create} from 'zustand';

// const useVideoStore = create((set) => ({
//   videos: [],
//   addVideo: (video) =>
//     set((state) => ({
//       videos: [...state.videos, video],
//     })),
//   updateVideo: (id, updatedVideo) =>
//     set((state) => ({
//       videos: state.videos.map((v) => (v.id === id ? updatedVideo : v)),
//     })),
// }));
// export default useVideoStore;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useVideoStore = create((set) => ({
  videos: [],
  addVideo: async (video) => {
    const currentVideos = await AsyncStorage.getItem("videos");
    const updatedVideos = currentVideos ? JSON.parse(currentVideos) : [];
    updatedVideos.push(video);

    await AsyncStorage.setItem("videos", JSON.stringify(updatedVideos));
    set({ videos: updatedVideos });
  },
  loadVideos: async () => {
    const storedVideos = await AsyncStorage.getItem("videos");
    set({ videos: storedVideos ? JSON.parse(storedVideos) : [] });
  },
}));
export default useVideoStore;

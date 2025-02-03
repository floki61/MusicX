import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import MusicList from "@/components/shared/MusicList";
import Trending from "@/components/Trending";
export default function App() {
  const handleMenuPress = () => console.log("Menu pressed");
  const handleSearchPress = () => console.log("Search pressed");
  const handleHistoryPress = () => console.log("History pressed");
  const handleSettingsPress = () => console.log("Settings pressed");

  const musicItems = [
    {
      id: "1",
      title: "Feeling Good Mix - Emma péters, Carla Morrison",
      artist: "Nonstop Music",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "2",
      title: "Black Shelton = God's Country (Official Music Video)",
      artist: "Blake Shelton",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "3",
      title: "Jain - Come (official Video)",
      artist: "JAIN",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "1",
      title: "Feeling Good Mix - Emma péters, Carla Morrison",
      artist: "Nonstop Music",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "2",
      title: "Black Shelton = God's Country (Official Music Video)",
      artist: "Blake Shelton",
      image: "https://via.placeholder.com/50",
    },
    {
      id: "3",
      title: "Jain - Come (official Video)",
      artist: "JAIN",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-gray-50 pb-20">
        <Navbar
          title="Music Downloader"
          onMenuPress={handleMenuPress}
          onSearchPress={handleSearchPress}
          onHistoryPress={handleHistoryPress}
          onSettingsPress={handleSettingsPress}
        />
        <ScrollView className="flex-1">
          <MusicList title="For You" musicItems={musicItems} />
          <Trending />
          <MusicList title="Local Files" musicItems={musicItems} />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

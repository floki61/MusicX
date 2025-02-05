import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import MusicList from "@/components/shared/MusicList";
import Trending from "@/components/Trending";
import { musicItems } from "@/data/music";
import Category from "@/components/shared/Category";
import Types from "@/components/shared/Types"
import TopArtists from "@/components/shared/TopArtists"
export default function App() {
  const handleMenuPress = () => console.log("Menu pressed");
  const handleSearchPress = () => console.log("Search pressed");
  const handleHistoryPress = () => console.log("History pressed");
  const handleSettingsPress = () => console.log("Settings pressed");

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-gray-50">
        <Navbar
          title="Music Downloader"
          onMenuPress={handleMenuPress}
          onSearchPress={handleSearchPress}
          onHistoryPress={handleHistoryPress}
          onSettingsPress={handleSettingsPress}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerClassName="pb-12"
        >
          <MusicList title="For You" musicItems={musicItems} />
          <Trending />
          <MusicList title="Local Files" musicItems={musicItems} />
          <Category />
          <Types />
          <Category />
          <TopArtists />
          <MusicList title="Top Songs" musicItems={musicItems} />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

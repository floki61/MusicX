import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Trending() {
  const musicList = [
    "Byad o K7al - Inkonnu",
    "Softcore the Neighbourhood",
    "stormy feat Inkonnu - MIZANE (Prod Mobench x Neyl) Stormy",
    "Bessan Isnail - Al Harbein | ث٣خثنخص",
  ];

  const trendingCards = [
    {
      id: "1",
      image: require("../assets/bg/inko.jpg"),
      title: "Byad o K7al",
      artist: "Inkonnu",
    },
    {
      id: "2",
      image: require("../assets/bg/inko.jpg"),
      title: "Softcore",
      artist: "The Neighbourhood",
    },
    {
      id: "3",
      image: require("../assets/bg/inko.jpg"),
      title: "MIZANE",
      artist: "Stormy feat Inkonnu",
    },
  ];

  return (
    <View className="space-y-2 pt-8">
      <View className="flex-row items-center justify-between px-2">
        <Text className="text-gray-900 text-2xl font-bold">Trending</Text>
        <TouchableOpacity>
          <Text className="text-md font-semibold text-orange-400">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scrollable Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 mb-4 pl-2"
      >
        {trendingCards.map((card) => (
          <TouchableOpacity key={card.id} className="mr-4 w-64">
            <View className="rounded-lg overflow-hidden">
              <Image source={card.image} className="w-64 h-32 rounded-lg" />
              <View className="mt-2">
                <Text className="text-gray-900 font-semibold text-sm">
                  {card.title}
                </Text>
                <Text className="text-gray-500 text-xs">{card.artist}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ImageBackground
        source={require("../assets/bg/inko.jpg")}
        className="h-64 rounded-lg overflow-hidden m-2"
      >
        <View className="flex-1 bg-orange-500/50 p-6">
          <View className="space-y-1">
            {musicList.map((music, index) => (
              <Text key={index} className="text-white text-lg font-semibold">
                {music}
              </Text>
            ))}
          </View>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white font-bold text-xl">
              Recently Played
            </Text>
            <TouchableOpacity>
              <Ionicons name="play-circle" size={55} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

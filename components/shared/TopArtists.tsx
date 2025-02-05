import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

type Artist = {
  id: string;
  name: string;
  image: string;
};

const artists: Artist[] = [
  {
    id: "1",
    name: "Laylow",
    image: require("../../assets/bg/inko.jpg"),
  },
  {
    id: "2",
    name: "Eminem",
    image: require("../../assets/bg/inko.jpg"),
  },
  {
    id: "3",
    name: "Dollypran",
    image: require("../../assets/bg/inko.jpg"),
  },
  {
    id: "4",
    name: "The Weekend",
    image: require("../../assets/bg/inko.jpg"),
  },
];

export default function TopArtists() {
  return (
    <View className="pt-4">
      <View className="flex-row items-center justify-between px-2 mb-4">
        <Text className="text-gray-900 text-2xl font-bold">Top Artists</Text>
        <TouchableOpacity>
          <Text className="text-md font-semibold text-orange-400">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-2"
      >
        {artists.map((artist) => (
          <TouchableOpacity key={artist.id} className="mr-4 items-center">
            <View className="relative">
              <Image source={artist.image} className="w-32 h-32 rounded-full" />
              <Text className="text-gray-900 text-center text-md font-medium mt-2">
                {artist.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type MusicItem = {
  id: string;
  title: string;
  artist: string;
  image: string;
};

type MusicListProps = {
  title: string;
  musicItems: MusicItem[];
};

const MusicList: React.FC<MusicListProps> = ({ title, musicItems }) => {
  const chunkedItems = musicItems.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as MusicItem[][]);

  return (
    <View className="space-y-2 px-2 pt-2">
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-gray-900 text-2xl font-bold">{title}</Text>
        <TouchableOpacity>
          <Text className="text-md font-semibold text-orange-400">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        {chunkedItems.map((chunk, chunkIndex) => (
          <View key={chunkIndex} className="mt-2 mr-4 w-[355px]">
            {chunk.map((item) => (
              <View
                key={item.id}
                className="bg-gray-100 p-4 rounded-lg flex-row items-center border border-gray-200 mt-2"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-12 h-12 rounded-lg mr-3 bg-gray-200"
                />
                <View className="flex-1">
                  <Text className="text-gray-900 font-bold flex-wrap">
                    {item.title}
                  </Text>
                  <Text className="text-orange-400 flex-wrap">
                    {item.artist}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color="#4B5563"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MusicList;

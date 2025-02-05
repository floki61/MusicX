import { Text, View } from "react-native";
import React, { Component } from "react";

export default class Types extends Component {
  render() {
    return (
      <View className="flex-1 p-4 gap-2">
        <View className="flex-row gap-2">
          <View className="flex-1 bg-purple-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Rock</Text>
          </View>
          <View className="flex-1 bg-green-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Jazz</Text>
          </View>
          <View className="flex-1 bg-orange-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Pop</Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <View className="flex-1 bg-pink-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Classical</Text>
          </View>
          <View className="flex-1 bg-blue-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Hip</Text>
          </View>
          <View className="flex-1 bg-red-500 p-8 rounded-lg items-center justify-center">
            <Text className="text-white text-md font-bold">Reggae</Text>
          </View>
        </View>
      </View>
    );
  }
}

import { Stack } from "expo-router";
import React from "react";
import Navbar from "../../components/Navbar";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

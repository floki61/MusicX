import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type NavbarProps = {
  title: string;
  onMenuPress: () => void;
  onSearchPress: () => void;
  onHistoryPress?: () => void;
  onSettingsPress?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  title,
  onMenuPress,
  onSearchPress,
  onHistoryPress,
  onSettingsPress,
}) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center px-4">
        {/* Left Section */}
        <TouchableOpacity
          onPress={onMenuPress}
          className="p-2 rounded-full active:bg-gray-100"
        >
          <Ionicons name="menu-outline" size={28} color="orange" />
        </TouchableOpacity>

        {/* Middle Section */}
        <View className="flex-1 items-center">
          <Ionicons name="headset-outline" size={30} color="gray" />
        </View>

        {/* Right Section */}
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={onSettingsPress}
            className="p-2 rounded-full active:bg-gray-100"
          >
            <Ionicons name="settings-outline" size={28} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search Bar */}
      <View className="mt-2 px-4">
        <TouchableOpacity
          onPress={onSearchPress}
          className="flex-row items-center bg-gray-100 px-4 p-3 rounded-lg"
        >
          <Ionicons name="search-outline" size={20} color="gray" />
          <Text className="ml-2 text-gray-500">Search...</Text>
        </TouchableOpacity>
      </View>

      {/* Optional: Progress Bar for active downloads */}
      {/* {Platform.OS !== "web" && (
        <View className="h-1 w-full bg-gray-100">
          <View className="h-full w-1/3 bg-blue-500" />
        </View>
      )} */}
    </SafeAreaView>
  );
};

export default Navbar;

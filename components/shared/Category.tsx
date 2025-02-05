import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const IconComponent = {
  AntDesign,
  SimpleLineIcons,
  Ionicons,
};

type CategoryProps = {
  iconType: keyof typeof IconComponent;
  iconName: string;
  label: string;
  onPress?: () => void;
  iconColor?: string;
};

const CategoryItem = ({
  iconType,
  iconName,
  label,
  onPress,
  iconColor = "black",
}: CategoryProps) => {
  const Icon = IconComponent[iconType];

  return (
    <TouchableOpacity onPress={onPress} className="active:bg-gray-100">
      <View className="py-2 px-4 flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <Icon name={iconName} size={24} color={iconColor} />
          <Text className="text-base font-medium">{label}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="orange" />
      </View>
    </TouchableOpacity>
  );
};

export default function Category() {
  return (
    <View className="mt-4">
      <CategoryItem
        iconType="AntDesign"
        iconName="like2"
        label="Like"
        onPress={() => console.log("Pressed like")}
        iconColor="orange"
      />
      <CategoryItem
        iconType="SimpleLineIcons"
        iconName="microphone"
        label="Microphone"
        onPress={() => console.log("Pressed microphone")}
        iconColor="orange"
      />
      <CategoryItem
        iconType="SimpleLineIcons"
        iconName="microphone"
        label="Microphone"
        onPress={() => console.log("Pressed microphone")}
        iconColor="orange"
      />
      <CategoryItem
        iconType="SimpleLineIcons"
        iconName="microphone"
        label="Microphone"
        onPress={() => console.log("Pressed microphone")}
        iconColor="orange"
      />
    </View>
  );
}

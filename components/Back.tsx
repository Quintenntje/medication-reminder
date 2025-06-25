import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface PageLayoutProps {
  children: React.ReactNode;
}

const Back: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <View className="flex-row items-center gap-4">
      <Icon
      name="arrow-back-outline"
      size={28}
      color="#007AFF"
      onPress={() => {
        router.back();
      }}
      />
      <Text className="text-4xl">{children}</Text>
    </View>
  );
};

export default Back;

import { router } from "expo-router";
import React from "react";
import { Text, View, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface PageLayoutProps {
  children: React.ReactNode;
  variant?: "default" | "small";
}

const Back: React.FC<PageLayoutProps> = ({ children, variant }) => {
  const colorScheme = useColorScheme();
  return (
    <View className="flex-row items-center gap-4">
      <Icon
      name="arrow-back-outline"
      size={variant === "small" ? 24 : 32}
      color={colorScheme === "dark" ? "white" : "black"}
      onPress={() => {
        router.back();
      }}
      />
        <Text
            className={`font-semibold ${variant === "small" ? "text-xl" : "text-4xl"} ${
                colorScheme === "dark" ? "text-gray-50" : "text-gray-900"
            }`}
        >
            {children}
        </Text>
    </View>
  );
};

export default Back;

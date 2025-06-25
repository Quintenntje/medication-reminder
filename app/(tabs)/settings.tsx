import React from "react";
import { Text, useColorScheme, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Settings = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1  ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <View className="p-4 mt-20">
        <Text
          className={`text-4xl font-semibold   ${
            colorScheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Settings
        </Text>
        <View className="mt-12">
          <View
            className={`flex-row items-center justify-between w-full p-4 border-t border-b ${
              colorScheme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <View className="flex-row items-center">
              <Icon
                name="lock-closed-outline"
                size={28}
                color={colorScheme === "dark" ? "#D1D5DB" : "#374151"}
              />
              <Text
                className={`text-2xl ml-3 ${
                  colorScheme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Security Options
              </Text>
            </View>
            <Icon
              name="chevron-forward-outline"
              size={28}
              color={colorScheme === "dark" ? "#9CA3AF" : "#6B7280"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;

import React from "react";
import { Text, useColorScheme, View } from "react-native";

const Settings = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1  ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Text
        className={`text-2xl font-semibold mt-20 mx-4 ${
          colorScheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Settings
      </Text>
    </View>
  );
};

export default Settings;

import React from "react";
import { Text, useColorScheme, View } from "react-native";

const Medication = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1 items-center justify-center ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Text
        className={`text-2xl font-semibold ${
          colorScheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Medication
      </Text>
    </View>
  );
};

export default Medication;

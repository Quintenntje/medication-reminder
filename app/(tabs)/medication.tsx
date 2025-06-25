import React from "react";
import { Text, useColorScheme, View } from "react-native";

const Medication = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      className={`flex-1 ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <View className="p-4 mt-20">
        <Text
          className={`text-4xl font-semibold  ${
            colorScheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Medication
        </Text>

        <View className="mt-8">
          <Text
            className={`text-lg mt-4 mx-4 ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Manage your medications here. Add, edit, or remove medications as
            needed.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Medication;

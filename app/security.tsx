import React from "react";
import { Text, useColorScheme, View } from "react-native";
import PageLayout from "../components/PageLayout";

const Security = () => {
  const colorScheme = useColorScheme();

  return (
    <PageLayout>
      <Text
        className={`text-4xl font-semibold   ${
          colorScheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Settings
      </Text>
      <View className="mt-12"></View>
    </PageLayout>
  );
};

export default Security;

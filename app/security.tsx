import React from "react";
import { useColorScheme, View } from "react-native";
import Back from "../components/Back";
import PageLayout from "../components/PageLayout";

const Security = () => {
  const colorScheme = useColorScheme();

  return (
    <PageLayout>
      <Back>Security</Back>
      <View className="mt-12"></View>
    </PageLayout>
  );
};

export default Security;

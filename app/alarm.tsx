import React from "react";
import { useColorScheme, View } from "react-native";
import Back from "../components/Back";
import PageLayout from "../components/PageLayout";

const Alarm = () => {
  const colorScheme = useColorScheme();

  return (
    <PageLayout>
      <Back>Alarm</Back>
      <View className="mt-12"></View>
    </PageLayout>
  );
};

export default Alarm;

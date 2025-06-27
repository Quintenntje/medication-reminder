import { router } from "expo-router";
import React from "react";
import { Text, useColorScheme, View } from "react-native";
import CustomButton from "../components/Button";
import PageLayout from "../components/PageLayout";

const Medication = () => {
  const colorScheme = useColorScheme();
  return (
    <PageLayout>
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
      <View className="mt-8">
        <CustomButton title="Add Medication" onPress={() => {}} />
        <CustomButton
          title="Cancel"
          variant="secondary"
          onPress={() => {
            router.push("/medication");
          }}
        />
      </View>
    </PageLayout>
  );
};

export default Medication;

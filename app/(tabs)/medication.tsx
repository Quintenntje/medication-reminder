import React from "react";
import { Text, useColorScheme, View } from "react-native";
import CustomButton from "../../components/Button";
import FixedToBottom from "../../components/FixedToBottom";
import PageLayout from "../../components/PageLayout";

const Medication = () => {
  const colorScheme = useColorScheme();
  return (
    <>
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
      </PageLayout>
      <FixedToBottom>
        <CustomButton title="Add Medication" onPress={() => {}} />
      </FixedToBottom>
    </>
  );
};

export default Medication;

import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import CustomButton from "../components/Button";
import PageLayout from "../components/PageLayout";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";

const Medication = () => {
  return (
    <PageLayout>
    <CustomText variant={"heading"}>
        Add Medication
    </CustomText>

      <View className="mt-8">
          <CustomText variant={"subheading"}>Medication type</CustomText>
      </View>
        <View className="mt-4">
            <CustomInput onChange={() => {}} placeholder="Medication name " />
        </View>
      <View className="mt-8">
        <CustomButton title="Next" onPress={() => {}} />
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

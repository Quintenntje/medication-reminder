import { router } from "expo-router";
import React from "react";
import { View, FlatList } from "react-native";
import CustomButton from "../components/Button";
import PageLayout from "../components/PageLayout";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import RadioButton from "../components/RadioButton";
import {medicationTypes} from "@/data/medicationTypes";

const Medication = () => {
    const [medicationType, setMedicationType] = React.useState("tablet");
    const [medicationName, setMedicationName] = React.useState("");

    const handleRadioButtonClick = (type: string) => {
        setMedicationType(type);
    }

    const handleNext = () => {
        if (!medicationName) {
            alert("Please enter a medication name");
            return;
        }

        router.push({
            pathname: "/addMedicationDetails",
            params: { medicationType, medicationName }
        });
    }

  return (
    <PageLayout>
    <CustomText variant={"heading"}>
        Add Medication
    </CustomText>

      <View className="mt-8">
          <CustomText variant={"subheading"}>Medication type</CustomText>
          <FlatList
              data={medicationTypes}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                  <RadioButton
                      label={item.label}
                      checked={medicationType === item.value}
                      onPress={() => handleRadioButtonClick(item.value)}
                  />
              )}
              contentContainerStyle={{
                  flexDirection: "row",
                    flexWrap: "wrap",
                  gap: 16,
                  marginTop: 8
              }}
          />
      </View>
        <View className="mt-16">
            <CustomText className={"mb-4"} variant={"subheading"}>Medication name</CustomText>
            <CustomInput  onChange={setMedicationName} placeholder="Medication name" value={medicationName}  />
        </View>
      <View className="mt-8">
        <CustomButton title="Next" onPress={handleNext} />
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

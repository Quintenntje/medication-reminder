import { router } from "expo-router";
import React from "react";
import { View, FlatList } from "react-native";
import CustomButton from "../components/Button";
import PageLayout from "../components/PageLayout";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import RadioButton from "../components/RadioButton";

const Medication = () => {
    const [medicationType, setMedicationType] = React.useState("tablet");

    const handleRadioButtonClick = (type: string) => {
        setMedicationType(type);
    }

  return (
    <PageLayout>
    <CustomText variant={"heading"}>
        Add Medication
    </CustomText>

      <View className="mt-8">
          <CustomText variant={"subheading"}>Medication type</CustomText>
          <FlatList
              data={[
                  { label: "Tablet", value: "tablet" },
                  { label: "Capsule", value: "capsule" }
              ]}
              horizontal
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                  <RadioButton
                      label={item.label}
                      checked={medicationType === item.value}
                      onPress={() => handleRadioButtonClick(item.value)}
                  />
              )}
              contentContainerStyle={{ gap: 16, marginTop: 8 }}
          />
      </View>
        <View className="mt-16">
            <CustomText className={"mb-4"} variant={"subheading"}>Medication name</CustomText>
            <CustomInput  onChange={() => {}} placeholder="Medication name"  />
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

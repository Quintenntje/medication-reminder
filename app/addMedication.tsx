import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
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
          <View className="flex flex-row gap-2">
            <RadioButton
              label="Tablet"
              checked={true}
              onPress={() => {handleRadioButtonClick("tablet")}}
            />
            <RadioButton
              label="Liquid"
              checked={false}
              onPress={() => { handleRadioButtonClick("liquid")}}
            />
            <RadioButton
              label="Injection"
                checked={false}
              onPress={() => { handleRadioButtonClick("injection")}}
            />
          </View>
      </View>
        <View className="mt-4">
            <CustomInput onChange={() => {}} placeholder="Medication name "  />
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

import React from "react";
import { View , Text} from "react-native";
import Back from "../components/Back";
import PageLayout from "../components/PageLayout";
import ToggleCard from "../components/ToggleCard";

const Alarm = () => {
  return (
    <PageLayout>
      <Back>Alarm</Back>
      <View className="mt-12">
        <ToggleCard>Default</ToggleCard>
        <ToggleCard>Vibrations</ToggleCard>
      </View>
    </PageLayout>
  );
};

export default Alarm;

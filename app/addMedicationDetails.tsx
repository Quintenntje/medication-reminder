import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import PageLayout from "../components/PageLayout";
import CustomText from "../components/CustomText";
import Back from "@/components/Back";

const AddMedicationDetails = () => {
    const { medicationType = "N/A", medicationName = "N/A" } = useLocalSearchParams<{ medicationType?: string, medicationName?: string }>();

    return (
        <PageLayout>
            <Back variant={"small"}>Change medication name</Back>
            <CustomText className={"mt-4"} variant={"heading"}>
                Add Medication Details
            </CustomText>

            <View className="mt-8">

                <CustomText variant={"subheading"}>Medication Type</CustomText>
             <CustomText>{medicationType}</CustomText>
                <CustomText variant={"subheading"} className={"mt-4"}>Medication Name</CustomText>
                <CustomText>{medicationName}</CustomText>
            </View>
        </PageLayout>
    );
};

export default AddMedicationDetails;

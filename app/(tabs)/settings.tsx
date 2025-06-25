import React from "react";
import { Text, useColorScheme, View } from "react-native";
import SettingsItem from "../../components/SettingsItem";

const Settings = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1  ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <View className="p-4 mt-20">
        <Text
          className={`text-4xl font-semibold   ${
            colorScheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Settings
        </Text>
        <View className="mt-12">
          <SettingsItem
            title="Security Options"
            iconName="lock-closed-outline"
            onPress={() => console.log("Security Options pressed")}
          />
          <SettingsItem
            title="Notifications"
            iconName="notifications-outline"
            onPress={() => console.log("Notifications pressed")}
          />
          <SettingsItem
            title="Privacy"
            iconName="shield-outline"
            onPress={() => console.log("Privacy pressed")}
          />
          <SettingsItem
            title="About"
            iconName="information-circle-outline"
            onPress={() => console.log("About pressed")}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;

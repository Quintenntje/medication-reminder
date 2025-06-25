import React from "react";
import { Text, useColorScheme, View } from "react-native";
import PageLayout from "../../components/PageLayout";
import SettingsItem from "../../components/SettingsItem";

const Settings = () => {
  const colorScheme = useColorScheme();

  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default Settings;

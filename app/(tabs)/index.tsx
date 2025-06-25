import { Link } from "expo-router";
import { Text, View, useColorScheme } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1 items-center justify-center ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Text
        className={`font-bold text-5xl ${
          colorScheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Welcome
      </Text>
      <Link
        href="/onboarding"
        className={`mt-4 ${
          colorScheme === "dark" ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Onboarding
      </Link>
    </View>
  );
}

import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { SafeAreaView, Text, useColorScheme } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
interface SlideItem {
  key: string;
  title: string;
  text: string;
  lottie: any;
}

interface RenderItemProps {
  item: SlideItem;
}

const slides: SlideItem[] = [
  {
    key: "one",
    title: "Stay on Track",
    text: "Get reminders for your medications on time.",
    lottie: require("../assets/lottie/track.json"),
  },
  {
    key: "two",
    title: "Track Progress",
    text: "Mark doses as taken and track your history.",
    lottie: require("../assets/lottie/progress.json"),
  },
  {
    key: "three",
    title: "Your Health, Secured",
    text: "Your data stays private and secure.",
    lottie: require("../assets/lottie/health.json"),
  },
];

export default function Onboarding() {
  const colorScheme = useColorScheme();

  const onDone = (): void => {
    router.replace("/");
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <SafeAreaView
      className={`flex-1 items-center justify-center p-5 
      bg-primary-light
      `}
    >
      <LottieView
        source={item.lottie}
        autoPlay={true}
        loop={true}
        style={{ width: 312, height: 312, marginBottom: 32 }}
      />
      <Text
        className={`text-4xl font-bold text-center mb-3 ${
          colorScheme === "dark" ? "text-white" : "text-white"
        }`}
      >
        {item.title}
      </Text>
      <Text
        className={`text-lg text-center ${
          colorScheme === "dark" ? "text-gray-300" : "text-white"
        }`}
      >
        {item.text}
      </Text>
    </SafeAreaView>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton
      onSkip={onDone}
    />
  );
}

import LottieView from "lottie-react-native";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

interface SlideItem {
  key: string;
  title: string;
  text: string;
  lottie: any;
  backgroundColor: string;
}

interface OnboardingProps {
  navigation: {
    replace: (routeName: string) => void;
  };
}

interface RenderItemProps {
  item: SlideItem;
}

const slides: SlideItem[] = [
  {
    key: "one",
    title: "Stay on Track",
    text: "Get reminders for your medications on time.",
    lottie:  require("../assets/lottie/track.json"),
    backgroundColor: "#6C63FF",
  },
  {
    key: "two",
    title: "Track Progress",
    text: "Mark doses as taken and track your history.",
    lottie:  require("../assets/lottie/progress.json"),
    backgroundColor: "#00C9A7",
  },
  {
    key: "three",
    title: "Your Health, Secured",
    text: "Your data stays private and secure.",
    lottie: require("../assets/lottie/health.json"),
    backgroundColor: "#FF6B6B",
  },
];

export default function Onboarding({ navigation }: OnboardingProps) {
  const onDone = (): void => {
    navigation.replace("login");
  };

  const renderItem = ({ item }: RenderItemProps) => (
    <SafeAreaView
      className="flex-1 items-center justify-center p-5"
      style={{ backgroundColor: item.backgroundColor }}
    >
      <LottieView
        source={item.lottie}
        autoPlay={true}
        loop={true}
        style={{ width: 312, height: 312, marginBottom: 32 }}
      />
      <Text className="text-4xl font-bold text-white text-center mb-3">
        {item.title}
      </Text>
      <Text className="text-lg text-white text-center">{item.text}</Text>
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

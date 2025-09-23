import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { router } from "expo-router";
import { ROUTES } from "@/util/constant/routes";
import WelcomeScreenSvg from "@/assets/images/welcomescreen.svg"; // SVG as component
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/util/constant/responsive";

const WelcomeScreen = () => {
  const handleContinue = () => {
    router.push(ROUTES.BOTTOM_TAB.HOME);
  };

  return (
    <View className="flex-1">
      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Background SVG - covers entire screen */}
      <WelcomeScreenSvg
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Content Container */}
      <View className="flex-1 justify-between px-6" style={{ paddingTop: 60 }}>
        {/* Middle Content */}
        <View className="flex-1 justify-center items-center">
          <View className="items-center">
            <Text className="text-white text-4xl font-bold mb-2 text-center leading-tight">
              Welcome to
            </Text>
            <Text className="text-primaryButton text-5xl font-black italic mb-2">
              zypser
            </Text>
            <Text className="text-white text-4xl font-bold text-center">
              customers
            </Text>
          </View>
        </View>

        {/* Bottom Button */}
        <View className="pb-12">
          <TouchableOpacity
            className="bg-primaryButton rounded-full py-4 mx-4"
            onPress={handleContinue}
            activeOpacity={0.9}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

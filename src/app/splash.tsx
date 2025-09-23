import { View } from "react-native";
import React from "react";
import { Text } from "@/components/core/text";
import { LinearGradient } from "expo-linear-gradient";
import CustomSvg from "@/components/core/svg/CustomSvg";
import { TouchableOpacity } from "@/components/core/button";
import { COLORS } from "@/util/constant/colors";
import { ROUTES } from "@/util/constant/routes";
import { router } from "expo-router";
import CustomHeader from "@/components/core/header";

const Splash = () => {
  const handleGetStarted = () => {
    router.push(ROUTES.AUTH.LOGIN);
  };

  return (
    <View className="flex-1" style={{ backgroundColor: COLORS.splashBg }}>
      <CustomHeader
        backgroundColor="transparent"
        statusBarStyle="light"
        textColor={COLORS.white}
      />
      {/* Logo Section */}
      <View className="items-center mt-8 pb-2">
        <Text variant="body" className="text-white font-bold italic text-3xl">
          zypser
        </Text>
      </View>

      {/* Main Content - Solid Background */}
      <View className="flex-1 justify-between items-center px-6 pb-10">
        {/* Hero Image/Illustration */}
        <View className="flex-1 justify-center items-center">
          <View className="mb-6">
            <CustomSvg name="splash" width={280} height={280} />
          </View>

          {/* Text Content */}
          <View className="items-center mb-8">
            <Text
              variant="title2"
              className="text-white font-bold text-center mb-1"
            >
              Trusted experts
            </Text>
            <Text variant="title2" className="text-white font-bold text-center">
              right at your doorstep
            </Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View className="w-full items-center">
          <TouchableOpacity
            style={{ borderRadius: 1000, padding: 10 }}
            onPress={handleGetStarted}
            className="w-full rounded-full mb-6"
          >
            <LinearGradient
              colors={[COLORS.gradient1wo, COLORS.gradient2wo]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ padding: 12, borderRadius: 100 }}
              className="w-full rounded-full py-4 px-8 relative"
            >
              {/* Text centered */}
              <Text
                variant="heading"
                className="text-white font-semibold text-center"
              >
                Get Started
              </Text>

              {/* Icon absolutely positioned on the right */}
              <View
                className="absolute right-6 top-1/2"
                style={{ marginTop: 2 }}
              >
                {/* <LucideIcon
                  name="ArrowRight"
                  size={20}
                  color={COLORS.white}
                  strokeWidth={2.5}
                /> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Splash;

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import CustomHeader from "@/components/core/header";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/util/constant/responsive";
import Svg, {
  Defs,
  Mask,
  Rect,
  RadialGradient,
  Stop,
  Circle,
} from "react-native-svg";
import CustomSvg from "@/components/core/svg/CustomSvg";
import { COLORS } from "@/util/constant/colors";
import { ROUTES } from "@/util/constant/routes";
import { Icon } from "@/components/core/icon";
import { router } from "expo-router";

const FetchLocation = () => {
  const [locationFetched, setLocationFetched] = useState(false);

  // simulate fetching (replace with real location logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocationFetched(true);
      setTimeout(() => {
        router.replace(ROUTES.BOTTOM_TAB.HOME);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const radius = 120;
  const centerX = SCREEN_WIDTH / 2;
  const centerY = SCREEN_HEIGHT / 2.5;

  return (
    <View className="flex-1 bg-allStone">
      <CustomHeader backgroundColor="transparent" statusBarStyle="dark" />

      {/* Map in background */}
      <CustomSvg name="map" width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />

      {/* Dark overlay with smooth circular fade */}
      <Svg
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        style={{
          position: "absolute",
          backgroundColor: `${COLORS.background}50`,
          borderRadius: 100,
        }}
      >
        <Defs>
          <RadialGradient
            id="fadeCircle"
            cx={centerX}
            cy={centerY}
            r={radius}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="100%" stopColor="black" stopOpacity="0" />
            <Stop offset="80%" stopColor="black" stopOpacity="1" />
          </RadialGradient>

          <Mask id="spotlight">
            <Rect width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="white" />
            <Circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="url(#fadeCircle)"
            />
          </Mask>
        </Defs>

        <Rect
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          fill={COLORS.background}
          opacity={0.7}
          mask="url(#spotlight)"
        />
      </Svg>

      {/* Pin / Success icon */}
      <View className="absolute top-1/3 left-1/3">
        <View style={{ top: 0, left: 30 }}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: locationFetched
                ? `${COLORS.completed}10`
                : `${COLORS.primary}10`,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: locationFetched
                  ? `${COLORS.completed}20`
                  : `${COLORS.primary}20`,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}
            >
              <Icon
                name={locationFetched ? "check" : "map-pin"}
                size={20}
                color={locationFetched ? COLORS.completed : COLORS.primary}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Text below */}
      <View className="absolute top-2/4 w-full px-8">
        {locationFetched ? (
          <View className="bottom-14">
            <Text className="text-sm text-center font-semibold text-primaryText text-green-800">
              Delivering service at
            </Text>
            <Text className="text-lg text-center font-semibold text-primaryText mt-4">
              Art Mesuem
            </Text>
            <Text className="text-sm text-center font-semibold text-primaryText ">
              234, Blad track, 23 U Mark Towers, Melbourne, Australia
            </Text>
          </View>
        ) : (
          <Text className="text-center bottom-10 text-lg font-semibold text-primaryText">
            Fetching your location
          </Text>
        )}
      </View>
    </View>
  );
};

export default FetchLocation;

import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import CustomSvg from "@/components/core/svg/CustomSvg";
import { COLORS } from "@/util/constant/colors";

interface ZypserCoverBannerProps {
  onPress?: () => void;
  title?: string;
  subtitle?: string;
  badgeText?: string;
  unionSvgName?: string;
  shieldSvgName?: string;
}

const ZypserCoverBanner: React.FC<ZypserCoverBannerProps> = ({
  onPress,
  title = "No worries.\nNo risks.\n100% guaranteed.",
  subtitle,
  badgeText = "Zypser Cover",
  unionSvgName = "union",
  shieldSvgName = "shield",
}) => {
  const handlePress = () => {
    onPress?.();
  };

  return (
    <View className="px-4 py-6 bg-allStone ">
      <TouchableOpacity onPress={handlePress}>
        <View
          className="rounded-xl overflow-hidden bg-allStone"
          style={{
            height: 190,
            width: "100%", // Ensure full width
          }}
        >
          <LinearGradient
            colors={["#1A48A3", "#0A1B3D"]}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <View className="flex-row h-full w-full">
              {/* Left Section with Gradient */}
              <View className="p-4">
                {/* Fixed width instead of flex */}

                {/* Decorative shield SVG - Bottom Left */}
                <View
                  className="absolute opacity-100"
                  style={{
                    left: -31,
                    top: 61,
                  }}
                >
                  <CustomSvg
                    name="shield"
                    width={154}
                    height={154}
                    fill={COLORS.white}
                  />
                </View>

                {/* Content */}
                <View className="relative z-10 flex-1 justify-between">
                  {/* Title Text */}
                  <View className="justify-start flex-1">
                    <Text
                      variant="footnote"
                      className="text-white font-medium"
                      style={{ lineHeight: 17 }}
                    >
                      {title}
                    </Text>
                  </View>

                  {/* Badge */}
                  <View className="self-start">
                    <View
                      className="bg-white px-2 py-1.5 rounded"
                      style={{
                        alignSelf: "flex-start",
                        minWidth: 60,
                        height: 22,
                      }}
                    >
                      <Text
                        variant="caption2"
                        className="text-primaryButton font-medium text-center"
                        style={{ fontSize: 8, lineHeight: 10 }}
                      >
                        {badgeText}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Right Section with Union SVG */}
              <View
                className="flex-1" // Use flex-1 to take remaining space
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                {/* Union SVG Background - Full size */}
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <CustomSvg
                    name="union"
                    height={190}
                    width={230}
                    className="w-full h-full"
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ZypserCoverBanner;

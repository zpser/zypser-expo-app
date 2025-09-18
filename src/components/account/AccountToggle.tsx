import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { COLORS } from "@/util/constant/colors";

interface AccountToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  size?: "small" | "medium" | "large";
}

const AccountToggle: React.FC<AccountToggleProps> = ({
  isEnabled,
  onToggle,
  size = "medium",
}) => {
  const animatedValue = useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  // Size configurations - Medium width is now 60
  const sizeConfig = {
    small: { width: 68, height: 24, circleSize: 20, translateRange: [2, 46] },
    medium: { width: 60, height: 32, circleSize: 28, translateRange: [2, 30] },
    large: { width: 68, height: 40, circleSize: 36, translateRange: [2, 30] },
  };

  const config = sizeConfig[size];

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isEnabled ? 1 : 0,
      tension: 100,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: config.translateRange,
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.borderLight, COLORS.success],
  });

  const circleBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.white, COLORS.white],
  });

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.borderLight, COLORS.success],
  });

  return (
    <TouchableOpacity onPress={onToggle}>
      <Animated.View
        className="rounded-full justify-center relative border"
        style={{
          width: config.width,
          height: config.height,
          backgroundColor,
          borderColor,
          borderWidth: 1,
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        {/* I Text Indicator - Left Side (when enabled) */}
        <Animated.View
          className="absolute left-3 top-0 bottom-0 justify-center"
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.9],
            }),
          }}
        >
          <Animated.Text
            style={{
              fontSize: size === "large" ? 12 : size === "medium" ? 10 : 8,
              fontWeight: "bold",
              color: COLORS.white,
            }}
          >
            I
          </Animated.Text>
        </Animated.View>

        {/* O Text Indicator - Right Side (when disabled) */}
        <Animated.View
          className="absolute right-3 top-0 bottom-0 justify-center"
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.7, 0],
            }),
          }}
        >
          <Animated.Text
            style={{
              fontSize: size === "large" ? 12 : size === "medium" ? 10 : 8,
              fontWeight: "bold",
              color: COLORS.white,
            }}
          >
            O
          </Animated.Text>
        </Animated.View>

        {/* Toggle Circle */}
        <Animated.View
          className="absolute bg-white rounded-full border border-gray-100"
          style={{
            width: config.circleSize,
            height: config.circleSize,
            transform: [{ translateX }],
            backgroundColor: circleBackgroundColor,
            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AccountToggle;

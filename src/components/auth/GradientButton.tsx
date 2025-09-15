import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@/components/core/text";
import { LucideIcon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface GradientButtonProps {
  title: string;
  onPress?: () => void;
  colors?: string[];
  isRigthIcon?: boolean; // Lucide icon name
  style?: StyleProp<ViewStyle> | undefined;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  colors = [COLORS.gradinet1, COLORS.gradient2],
  isRigthIcon,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        {/* Button Text */}
        <Text
          variant="heading"
          className="text-white font-semibold text-center"
        >
          {title}
        </Text>

        {/* Optional Icon */}
        {isRigthIcon && (
          <View style={styles.iconWrapper}>
            <LucideIcon
              name={"ArrowRight"}
              size={20}
              color={COLORS.white}
              strokeWidth={2.5}
            />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 100,
    overflow: "hidden",
    width: "100%",
    marginBottom: 24,
  },
  gradient: {
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  iconWrapper: {
    position: "absolute",
    right: 24,
    top: "50%",
    marginTop: -10, // half of icon size
  },
});

export default GradientButton;

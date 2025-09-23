import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { LucideIcon } from "../core/icon";

interface FeatureHeaderProps {
  onBackPress: () => void;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ onBackPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white pb-4">
      <View
        className="ml-4 overflow-hidden rounded-full self-start bg-white"
        style={{
          marginTop: insets.top + 10,
          zIndex: 10,
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity onPress={onBackPress}>
          <BlurView
            intensity={40}
            tint="light"
            className="flex-row items-center py-2 px-3"
          >
            <Text
              className="text-xl mr-3"
              style={{ color: COLORS.primary, lineHeight: 20, marginTop: 2 }}
            >
              ←
            </Text>
            <Text
              variant="callout"
              className="font-semibold"
              style={{ color: COLORS.primaryText }}
            >
              Back
            </Text>
          </BlurView>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between align-middle px-6 pt-4">
        <View>
          <Text variant="title2" className="font-semibold">
            Carpenter Service
          </Text>
          <View className="flex-row items-center mt-1">
            <LucideIcon name="Star" size={14} color={COLORS.warning} />
            <Text
              variant="footnote"
              className="ml-1"
              style={{ color: COLORS.primaryText }}
            >
              4.9 (35k Booking)
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <View
            className="p-2 rounded-full"
            style={{ backgroundColor: COLORS.textSecondary }}
          >
            <LucideIcon name="Search" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeatureHeader;

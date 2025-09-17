import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { Ionicon, LucideIcon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

export interface ProfileMenuItemProps {
  iconName: string;
  iconType?: "ionicon" | "lucide";
  title: string;
  subtitle: string;
  onPress: () => void;
  showBadge?: boolean;
  badgeText?: string;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  iconName,
  iconType = "ionicon",
  title,
  subtitle,
  onPress,
  showBadge = false,
  badgeText = "",
}) => {
  const renderIcon = () => {
    if (iconType === "lucide") {
      return (
        <LucideIcon
          name={iconName as any}
          size={20}
          color={COLORS.primary}
          strokeWidth={1.5}
        />
      );
    }

    return <Ionicon name={iconName as any} size={20} color={COLORS.primary} />;
  };

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between px-2 py-4 bg-white"
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        <View
          className="w-10 h-10 rounded-lg items-center justify-center mr-3"
          style={{
            backgroundColor: `${COLORS.primary}10`,
            borderWidth: 1,
            borderColor: `${COLORS.primary}18`,
          }}
        >
          {renderIcon()}
        </View>
        <View className="flex-1">
          <View className="flex-row items-center">
            <Text variant="body" className="font-medium text-primaryText">
              {title}
            </Text>
            {showBadge && (
              <View
                className="ml-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${COLORS.primary}08`,
                  borderWidth: 1,
                  borderColor: `${COLORS.primary}16`,
                }}
              >
                <Text className="text-xs text-primaryButton font-medium">
                  {badgeText}
                </Text>
              </View>
            )}
          </View>
          <Text
            variant="body"
            className="font-light text-base"
            style={{ color: COLORS.secondaryText }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <Ionicon name="chevron-forward" size={16} color={COLORS.primaryText} />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

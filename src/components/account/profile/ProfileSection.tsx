import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import ProfileMenuItem, { ProfileMenuItemProps } from "./ProfileMenuItem";

interface ProfileSectionProps {
  title: string;
  items: ProfileMenuItemProps[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, items }) => {
  return (
    <View className="mb-6">
      <Text
        variant="caption1"
        className="text-secondaryText font-semibold tracking-wider uppercase px-6 py-3"
      >
        {title}
      </Text>
      <View className="mx-5 rounded-xl overflow-hidden bg-white shadow-sm">
        {items.map((item, index) => (
          <React.Fragment key={`${item.title}-${index}`}>
            <ProfileMenuItem {...item} />
            {index < items.length - 1 && (
              <View
                className="h-px"
                style={{ backgroundColor: COLORS.borderLight }}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default ProfileSection;

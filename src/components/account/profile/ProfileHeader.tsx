import React from "react";
import { View, Image } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  memberSince: string;
  avatarUrl?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  firstName,
  lastName,
  memberSince,
  avatarUrl,
}) => {
  return (
    <View className="bg-allStone pt-4 pb-6">
      <View className="items-center">
        <View className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200">
          <Image
            source={{ uri: avatarUrl || "https://via.placeholder.com/96x96" }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-row items-baseline mb-1">
          <Text variant="title2" className="text-primaryButton font-bold">
            {firstName}{" "}
          </Text>
          <Text variant="title2" className="text-primaryText font-bold">
            {lastName}
          </Text>
        </View>
        <Text variant="footnote" className="text-secondaryText">
          Member Since {memberSince}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface ProfilePictureProps {
  avatarUrl: string;
  isEditing: boolean;
  onEditPress: () => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  avatarUrl,
  isEditing,
  onEditPress,
}) => {
  return (
    <View className="items-center pt-6 pb-8">
      <View className="relative">
        <View
          className="w-24 h-24 rounded-full overflow-hidden bg-gray-200"
          style={{ borderWidth: 3, borderColor: `${COLORS.primary}12` }}
        >
          <Image
            source={{ uri: avatarUrl }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Edit Overlay for Profile Picture */}
        {isEditing && (
          <TouchableOpacity
            className="absolute inset-0 bg-black/40 rounded-full items-center justify-center"
            onPress={onEditPress}
          >
            <View className="w-8 h-8 bg-primaryButton rounded-lg items-center justify-center">
              <Ionicon name="camera" size={16} color="white" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfilePicture;

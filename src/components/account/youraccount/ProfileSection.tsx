import React from "react";
import { View } from "react-native";
import { UserProfile } from "@/assets/data/account";
import ProfileField from "./ProfileField";

interface ProfileSectionProps {
  profile: UserProfile;
  isEditing: boolean;
  onFieldChange: (field: keyof UserProfile, value: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  profile,
  isEditing,
  onFieldChange,
}) => {
  return (
    <View>
      <ProfileField
        label="Name"
        value={profile.name}
        isEditing={isEditing}
        onChangeText={(text) => onFieldChange("name", text)}
        placeholder="Enter your name"
      />
      <View className="h-[1px] bg-gray-300 my-6" />

      <ProfileField
        label="Email"
        value={profile.email}
        isEditing={isEditing}
        onChangeText={(text) => onFieldChange("email", text)}
        placeholder="Enter your email"
      />
      <View className="h-[1px] bg-gray-300 my-6" />

      <ProfileField
        label="Phone Number"
        value={profile.phoneNumber}
        isEditing={isEditing}
        onChangeText={(text) => onFieldChange("phoneNumber", text)}
        placeholder="Enter your phone number"
      />
      <View className="h-[1px] bg-gray-300 my-6" />

      <ProfileField
        label="Address"
        value={profile.address}
        isEditing={isEditing}
        onChangeText={(text) => onFieldChange("address", text)}
        placeholder="Enter your address"
      />
    </View>
  );
};

export default ProfileSection;

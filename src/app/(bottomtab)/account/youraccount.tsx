import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { COLORS } from "@/util/constant/colors";
import { SafeAreaView } from "@/components/core/safe-area-view";
import AccountHeader from "@/components/account/AccountHeader";
import {
  ProfilePicture,
  ProfileSection,
  ProfileButtons,
} from "@/components/account/youraccount";
import { UserProfile, USER_PROFILE } from "@/assets/data/account";

const YourAccount = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile>(USER_PROFILE);

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const updateField = (field: keyof UserProfile, value: string) => {
    setEditedProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const currentProfile = isEditing ? editedProfile : profile;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.background }}
      className="flex-1 bg-allStone"
      paddingX={0}
    >
      <View className="flex-1 bg-allStone mx-4 mt-4">
        {/* Header */}
        <AccountHeader title="Your Account" />

        {/* Scrollable Content */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Profile Picture Section */}
          <ProfilePicture
            avatarUrl={currentProfile.avatarUrl}
            isEditing={isEditing}
            onEditPress={() => console.log("Edit profile picture")}
          />

          {/* Profile Fields */}
          <ProfileSection
            profile={currentProfile}
            isEditing={isEditing}
            onFieldChange={updateField}
          />
        </ScrollView>

        {/* Bottom Buttons - Fixed at bottom */}
        <ProfileButtons
          isEditing={isEditing}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourAccount;

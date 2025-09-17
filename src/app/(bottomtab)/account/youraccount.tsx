import React, { useState } from "react";
import { View, ScrollView, Image, TextInput } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import CustomHeader from "@/components/core/header";
import { SafeAreaView } from "@/components/core/safe-area-view";
import AccountHeader from "@/components/account/youraccount/AccountHeader";

interface UserProfile {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatarUrl: string;
}

const ProfileField = ({
  label,
  value,
  isEditing,
  onChangeText,
  placeholder,
}: {
  label: string;
  value: string;
  isEditing: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) => (
  <View className="mx-2">
    <View
      className={`bg-white rounded-full px-4 py-3`}
      style={{
        borderWidth: 1,
        borderColor: isEditing
          ? `${COLORS.primary}30`
          : `${COLORS.primaryText}20`,
      }}
    >
      <View className="flex-row items-center justify-between">
        <Text variant="footnote" className="text-primaryText font-medium">
          {label}
        </Text>
        {isEditing ? (
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            className="flex-1 text-right text-primaryText"
            placeholderTextColor={COLORS.secondaryText}
          />
        ) : (
          <Text
            variant="footnote"
            style={{
              color: isEditing ? COLORS.primaryText : COLORS.secondaryText,
            }}
          >
            {value}
          </Text>
        )}
      </View>
    </View>
  </View>
);

const YourAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "Beverly Marconi",
    email: "beverlymarconi@gmail.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "12 Nexus St, Melbo...",
    avatarUrl: "https://via.placeholder.com/120x120",
  });

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
        <AccountHeader />

        {/* Scrollable Content */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Profile Picture Section */}
          <View className="items-center pt-6 pb-8">
            <View className="relative">
              <View
                className="w-24 h-24 rounded-full overflow-hidden bg-gray-200"
                style={{ borderWidth: 3, borderColor: `${COLORS.primary}12` }}
              >
                <Image
                  source={{ uri: currentProfile.avatarUrl }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>

              {/* Edit Overlay for Profile Picture */}
              {isEditing && (
                <TouchableOpacity
                  className="absolute inset-0 bg-black/40 rounded-full items-center justify-center"
                  onPress={() => console.log("Edit profile picture")}
                >
                  <View className="w-8 h-8 bg-primaryButton rounded-lg items-center justify-center">
                    <Ionicon name="camera" size={16} color="white" />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Profile Fields */}
          <View>
            <ProfileField
              label="Name"
              value={currentProfile.name}
              isEditing={isEditing}
              onChangeText={(text) => updateField("name", text)}
              placeholder="Enter your name"
            />
            <View className="h-[1px] bg-gray-300 my-6" />

            <ProfileField
              label="Email"
              value={currentProfile.email}
              isEditing={isEditing}
              onChangeText={(text) => updateField("email", text)}
              placeholder="Enter your email"
            />
            <View className="h-[1px] bg-gray-300 my-6" />

            <ProfileField
              label="Phone Number"
              value={currentProfile.phoneNumber}
              isEditing={isEditing}
              onChangeText={(text) => updateField("phoneNumber", text)}
              placeholder="Enter your phone number"
            />
            <View className="h-[1px] bg-gray-300 my-6" />

            <ProfileField
              label="Address"
              value={currentProfile.address}
              isEditing={isEditing}
              onChangeText={(text) => updateField("address", text)}
              placeholder="Enter your address"
            />
          </View>
        </ScrollView>

        {/* Bottom Buttons - Fixed at bottom */}
        <View className="mb-12 px-4 py-6 bg-allStone">
          {!isEditing ? (
            // Edit Profile Button
            <TouchableOpacity
              className="bg-primaryButton rounded-full py-3 items-center"
              onPress={handleEdit}
            >
              <Text variant="subhead" className="font-medium text-white">
                Edit Profile
              </Text>
            </TouchableOpacity>
          ) : (
            // Cancel and Save Buttons
            <View className="flex-row gap-3">
              <TouchableOpacity
                className="flex-1 bg-white border border-primaryButton rounded-full py-3 items-center"
                onPress={handleCancel}
              >
                <Text
                  variant="subhead"
                  className="text-primaryButton font-medium"
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 bg-primaryButton rounded-full py-3 items-center"
                onPress={handleSave}
              >
                <Text variant="subhead" className="text-white font-medium">
                  Save Changes
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YourAccount;

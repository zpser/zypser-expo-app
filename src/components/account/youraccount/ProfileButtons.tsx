import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";

interface ProfileButtonsProps {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
}

const ProfileButtons: React.FC<ProfileButtonsProps> = ({
  isEditing,
  onEdit,
  onCancel,
  onSave,
}) => {
  return (
    <View className="mb-12 px-4 py-6 bg-allStone">
      {!isEditing ? (
        // Edit Profile Button
        <TouchableOpacity
          className="bg-primaryButton rounded-full py-3 items-center"
          onPress={onEdit}
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
            onPress={onCancel}
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
            onPress={onSave}
          >
            <Text variant="subhead" className="text-white font-medium">
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProfileButtons;

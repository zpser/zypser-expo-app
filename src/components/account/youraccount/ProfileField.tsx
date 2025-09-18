import React from "react";
import { View, TextInput } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface ProfileFieldProps {
  label: string;
  value: string;
  isEditing: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  isEditing,
  onChangeText,
  placeholder,
}) => {
  return (
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
};

export default ProfileField;

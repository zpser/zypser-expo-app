import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";

type NameFormValues = {
  name: string;
};

interface NameInputProps {
  control: Control<NameFormValues>;
  errors: FieldErrors<NameFormValues>;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  nameValue: string;
}

const NameInput: React.FC<NameInputProps> = ({
  control,
  errors,
  isFocused,
  onFocus,
  onBlur,
  nameValue,
}) => {
  return (
    <View className="mb-8">
      <Text className="text-base font-semibold text-gray-900 mb-3">
        Full Name
      </Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur: fieldOnBlur, value } }) => (
          <View
            className={`rounded-full border bg-white px-4 py-1 ${
              isFocused ? "border-primaryButton" : "border-transparent"
            }`}
          >
            <TextInput
              className="text-sm text-gray-900 mb-0.5"
              placeholder={nameValue ? "" : "full name"}
              placeholderTextColor="#9CA3AF"
              value={value}
              onChangeText={onChange}
              onFocus={onFocus}
              onBlur={() => {
                onBlur();
                fieldOnBlur();
              }}
              autoCapitalize="words"
              autoComplete="name"
              returnKeyType="done"
              style={{
                textAlignVertical: "center",
                height: 44,
              }}
            />
          </View>
        )}
      />

      {errors.name && (
        <Text className="text-red-500 text-sm mt-2 px-2">
          {errors.name.message as string}
        </Text>
      )}
    </View>
  );
};

export default NameInput;

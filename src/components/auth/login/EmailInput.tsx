import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { EmailLoginData } from "@/service/validation";

interface EmailInputProps {
  control: Control<EmailLoginData>;
  errors: FieldErrors<EmailLoginData>;
}

const EmailInput: React.FC<EmailInputProps> = ({ control, errors }) => {
  return (
    <View className="mt-8 mb-2">
      <Text className="text-base font-semibold text-gray-900 mb-2">
        Email Address
      </Text>

      <View className="bg-white rounded-xl border border-gray-200 mb-2">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="px-4 py-4 text-gray-700"
              placeholder="Email Address"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      {errors.email && (
        <Text className="text-red-500 text-sm mb-4">
          {errors.email.message}
        </Text>
      )}

      {/* Policy text moved to screen bottom */}
    </View>
  );
};

export default EmailInput;

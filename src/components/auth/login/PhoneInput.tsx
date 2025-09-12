import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PhoneLoginData } from "@/service/validation";

interface PhoneInputProps {
  control: Control<PhoneLoginData>;
  errors: FieldErrors<PhoneLoginData>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ control, errors }) => {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-900 mb-4">
        Phone Number
      </Text>

      <View className="flex-row items-center bg-white rounded-xl border border-gray-200 mb-2">
        <View className="flex-row items-center px-4 py-4 border-r border-gray-200">
          <Text className="text-2xl mr-2">🇦🇺</Text>
          <Text className="text-gray-700 font-medium">+61</Text>
          <Text className="text-gray-400 ml-1">▼</Text>
        </View>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="flex-1 px-4 py-4 text-gray-700"
              placeholder="Phone Number"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      {errors.phoneNumber && (
        <Text className="text-red-500 text-sm mb-4">
          {errors.phoneNumber.message}
        </Text>
      )}

      <Text className="text-sm text-gray-500 mb-8 leading-5">
        We will send a text with a verification code. Message and data rates may
        apply. By continuing, you agree to our{" "}
        <Text className="text-primaryButton">Terms of Service</Text> &{" "}
        <Text className="text-primaryButton">Privacy Policy</Text>.
      </Text>
    </View>
  );
};

export default PhoneInput;

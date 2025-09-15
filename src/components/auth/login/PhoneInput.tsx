import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PhoneLoginData } from "@/service/validation";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface PhoneInputProps {
  control: Control<PhoneLoginData>;
  errors: FieldErrors<PhoneLoginData>;
}

// Country data array
const COUNTRIES = [
  { code: "AU", flag: "🇦🇺", dialCode: "+61", name: "Australia" },
  { code: "US", flag: "🇺🇸", dialCode: "+1", name: "United States" },
  { code: "GB", flag: "🇬🇧", dialCode: "+44", name: "United Kingdom" },
  { code: "IN", flag: "🇮🇳", dialCode: "+91", name: "India" },
  { code: "CA", flag: "🇨🇦", dialCode: "+1", name: "Canada" },
  { code: "NZ", flag: "🇳🇿", dialCode: "+64", name: "New Zealand" },
  { code: "SG", flag: "🇸🇬", dialCode: "+65", name: "Singapore" },
  { code: "AE", flag: "🇦🇪", dialCode: "+971", name: "UAE" },
  // Add more countries as needed
];

const PhoneInput: React.FC<PhoneInputProps> = ({ control, errors }) => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryPicker, setShowCountryPicker] = useState(false); // Add this state

  return (
    <View className="mt-8 mb-2">
      <Text className="text-base font-semibold text-gray-900 mb-2">
        Phone Number
      </Text>

      <View className="flex-row items-center bg-white rounded-xl border border-gray-200 mb-2">
        <TouchableOpacity
          className="flex-row items-center px-4 py-4 border-r border-gray-200"
          onPress={() => setShowCountryPicker(true)} // Update this
        >
          <Text className="text-xl mr-2">{selectedCountry.flag}</Text>
          <Text className="text-gray-700 font-medium">
            {selectedCountry.dialCode}
          </Text>
          <View className="ml-2">
            <Ionicon name="chevron-down" size={16} color="#9CA3AF" />
          </View>
        </TouchableOpacity>

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

      {/* Policy text moved to screen bottom */}

      {/* Country Picker Modal */}
      <Modal
        visible={showCountryPicker}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCountryPicker(false)}
      >
        <View className="flex-1 bg-black/50">
          <View className="flex-1 bg-white mt-20 rounded-t-3xl">
            <SafeAreaView className="flex-1">
              {/* Modal Header */}
              <View className="px-4 py-3 border-b border-gray-200">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-semibold">Select Country</Text>
                  <TouchableOpacity onPress={() => setShowCountryPicker(false)}>
                    <Ionicon name="close" size={24} color="#374151" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Country List */}
              <FlatList
                data={COUNTRIES}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="flex-row items-center px-4 py-3 border-b border-gray-100"
                    onPress={() => {
                      setSelectedCountry(item);
                      setShowCountryPicker(false);
                    }}
                  >
                    <Text className="text-2xl mr-3">{item.flag}</Text>
                    <View className="flex-1">
                      <Text className="text-base font-medium text-gray-900">
                        {item.name}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {item.dialCode}
                      </Text>
                    </View>
                    {selectedCountry.code === item.code && (
                      <Ionicon
                        name="checkmark"
                        size={20}
                        color={COLORS.completed}
                      />
                    )}
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhoneInput;

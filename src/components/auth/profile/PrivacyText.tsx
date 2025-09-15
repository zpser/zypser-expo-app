import React from "react";
import { View, Text } from "react-native";

interface PrivacyTextProps {
  isFocused: boolean;
}

const PrivacyText: React.FC<PrivacyTextProps> = ({ isFocused }) => {
  return (
    <View className="mb-8">
      <Text className="text-gray-600 text-sm ">
        {isFocused ? (
          <>
            With <Text className="text-primaryButton font-medium">zypser</Text>{" "}
            your data is safe with us, we focus on data privacy and do not share
            it with any third-party apps.
          </>
        ) : (
          <>
            Your data is safe with us, we focus on data privacy and do not share
            it with any third-party applications.
          </>
        )}
      </Text>
    </View>
  );
};

export default PrivacyText;

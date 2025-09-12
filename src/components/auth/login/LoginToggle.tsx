import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface LoginToggleProps {
  loginMethod: "phone" | "email";
  onToggle: (method: "phone" | "email") => void;
}

const LoginToggle: React.FC<LoginToggleProps> = ({ loginMethod, onToggle }) => {
  return (
    <View className="flex-row bg-gray-200 rounded-full p-1 mb-8">
      <TouchableOpacity
        className={`flex-1 py-3 rounded-full ${
          loginMethod === "phone" ? "bg-primaryButton" : "bg-transparent"
        }`}
        onPress={() => onToggle("phone")}
      >
        <Text
          className={`text-center font-medium ${
            loginMethod === "phone" ? "text-white" : "text-gray-600"
          }`}
        >
          Phone
        </Text>
      </TouchableOpacity>
      <Text className="self-center mx-4 text-gray-400">or</Text>
      <TouchableOpacity
        className={`flex-1 py-3 rounded-full ${
          loginMethod === "email" ? "bg-primaryButton" : "bg-transparent"
        }`}
        onPress={() => onToggle("email")}
      >
        <Text
          className={`text-center font-medium ${
            loginMethod === "email" ? "text-white" : "text-gray-600"
          }`}
        >
          Email
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginToggle;

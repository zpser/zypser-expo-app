import { LoginMethod } from "@/@types/login";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface LoginToggleProps {
  loginMethod: LoginMethod;
  onToggle: (method: LoginMethod) => void;
}

const LoginToggle: React.FC<LoginToggleProps> = ({ loginMethod, onToggle }) => {
  return (
    <View className="flex-row bg-gray-200 rounded-full p-1 mb-8">
      <TouchableOpacity
        className={`flex-1 py-3 rounded-full ${
          loginMethod === "phone" ? "bg-primaryButton" : "bg-transparent"
        }`}
        onPress={() => onToggle(LoginMethod.PHONE)}
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
        onPress={() => onToggle(LoginMethod.EMAIL)}
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

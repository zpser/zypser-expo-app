import { View } from "react-native";
import React from "react";
import { COLORS } from "@/util/constant/colors";
import { Ionicon } from "@/components/core/icon";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { router } from "expo-router";

interface AccountHeaderProps {
  title: string; // 🔹 required prop
}

const AccountHeader: React.FC<AccountHeaderProps> = ({ title }) => {
  return (
    <View className="justify-between flex-row items-center">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicon name="chevron-back" size={16} color={COLORS.primary} />
      </TouchableOpacity>
      <Text variant="subhead">{title}</Text>
    </View>
  );
};

export default AccountHeader;

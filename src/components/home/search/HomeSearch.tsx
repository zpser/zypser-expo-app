import React from "react";
import { View, TextInput } from "react-native";
import { Ionicon } from "@/components/core/icon";

interface HomeSearchProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  height: number;
}

const HomeSearch: React.FC<HomeSearchProps> = ({
  placeholder = "What are you looking for?",
  onSearch,
  height,
}) => {
  return (
    <View className="mb-4" style={{ height }}>
      <View className="flex-row items-center bg-white rounded-full px-4 py-3 h-12">
        <View className="w-8 h-8 bg-primaryButton/10 rounded-full items-center justify-center mr-3">
          <Ionicon name="search-outline" size={16} color="#7D4DEE" />
        </View>
        <TextInput
          className="flex-1 text-gray-900 text-sm font-medium"
          placeholder={placeholder}
          placeholderTextColor="#12162870"
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeSearch;
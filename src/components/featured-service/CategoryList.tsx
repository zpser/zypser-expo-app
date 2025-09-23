import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { COLORS } from "@/util/constant/colors";

interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
}

interface CategoryListProps {
  data: CategoryItem[];
  onCategoryPress?: (item: CategoryItem) => void;
  numColumns?: number;
}

const CategoryList: React.FC<CategoryListProps> = ({
  data,
  onCategoryPress,
  numColumns = 4,
}) => {
  const renderCategoryItem = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity
      className="items-center justify-center flex-1 mx-2"
      onPress={() => onCategoryPress?.(item)}
    >
      <View
        className="w-16 h-16 rounded-2xl items-center justify-center mb-2 overflow-hidden"
        style={{ backgroundColor: COLORS.bgSecondary }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <Text
        variant="caption1"
        className="text-center"
        numberOfLines={2}
        style={{
          minHeight: 32,
          lineHeight: 16,
          color: COLORS.textSecondary,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Group items by rows for proper numColumns layout
  const groupedData = [];
  for (let i = 0; i < data.length; i += numColumns) {
    groupedData.push(data.slice(i, i + numColumns));
  }

  const renderRow = ({ item }: { item: CategoryItem[] }) => (
    <View className="flex-row justify-around px-4 bg-white py-4">
      {item.map((category) => (
        <View key={category.id} style={{ flex: 1 }}>
          {renderCategoryItem({ item: category })}
        </View>
      ))}
      {/* Fill empty spaces if row is not complete */}
      {Array.from({ length: numColumns - item.length }).map((_, index) => (
        <View key={`empty-${index}`} style={{ flex: 1 }} />
      ))}
    </View>
  );

  return (
    <CustomFlashList
      data={groupedData}
      renderItem={renderRow}
      estimatedItemSize={120}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 6,
        backgroundColor: COLORS.background,
      }}
    />
  );
};

export default CategoryList;

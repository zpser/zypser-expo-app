import React, { memo, useMemo } from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

export interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CategoryGridProps {
  categories: CategoryItem[];
  numColumns: number;
  onCategoryPress?: (item: CategoryItem) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  numColumns,
  onCategoryPress,
}) => {
  const groupedData = useMemo(() => {
    const rows: CategoryItem[][] = [];
    for (let i = 0; i < categories.length; i += numColumns) {
      rows.push(categories.slice(i, i + numColumns));
    }
    return rows;
  }, [categories, numColumns]);

  const renderCategoryItem = (item: CategoryItem) => (
    <TouchableOpacity
      key={item.id}
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
        style={{ minHeight: 32, lineHeight: 16, color: COLORS.textSecondary }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: COLORS.white, marginTop: 4 }}>
      {groupedData.map((row, rowIndex) => (
        <View
          key={`row-${rowIndex}`}
          className="flex-row justify-around px-4 py-4"
        >
          {row.map((category) => (
            <View key={category.id} style={{ flex: 1 }}>
              {renderCategoryItem(category)}
            </View>
          ))}
          {Array.from({ length: numColumns - row.length }).map((_, index) => (
            <View key={`empty-${rowIndex}-${index}`} style={{ flex: 1 }} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default memo(CategoryGrid);

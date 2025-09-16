import React, { memo } from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface ServiceCategoryHeaderProps {
  title: string;
}

const ServiceCategoryHeader: React.FC<ServiceCategoryHeaderProps> = ({
  title,
}) => {
  return (
    <View>
      <View className="mt-4" style={{ backgroundColor: COLORS.white }}>
        <Text
          variant="title3"
          className="mx-4 font-bold mt-4"
          style={{ color: COLORS.textPrimary }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default memo(ServiceCategoryHeader);

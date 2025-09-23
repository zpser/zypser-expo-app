import React, { memo } from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import { Icon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

export interface Service {
  id: string;
  name: string;
  rating: number;
  reviews: string;
  price: string;
  duration: string;
  image: string;
}

export interface ServiceCardProps {
  service: Service;
  isLastInCategory?: boolean;
  onPress?: (service: Service) => void;
  onAddPress?: (service: Service) => void;
  onViewDetailsPress?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isLastInCategory = false,
  onPress,
  onAddPress,
  onViewDetailsPress,
}) => {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <TouchableOpacity
        className="mx-4 py-4"
        onPress={() => onPress?.(service)}
      >
        <View className="flex-row items-start">
          <View className="flex-1 pr-4">
            <Text
              variant="callout"
              className="mb-3 font-medium"
              style={{ color: COLORS.textPrimary }}
            >
              {service.name}
            </Text>

            <View className="flex-row items-center mb-3">
              <Icon name="star" size={14} color={COLORS.warning} />
              <Text
                variant="footnote"
                className="ml-1"
                style={{ color: COLORS.textSecondary }}
              >
                {service.rating} ({service.reviews})
              </Text>
            </View>

            <View className="flex-row items-center mb-3">
              <Text
                variant="callout"
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                {service.price}
              </Text>
              <Text
                variant="footnote"
                className="ml-2"
                style={{ color: COLORS.textTertiary }}
              >
                • {service.duration}
              </Text>
            </View>

            <TouchableOpacity onPress={() => onViewDetailsPress?.(service)}>
              <Text
                variant="subhead"
                className="underline font-medium"
                style={{ color: COLORS.primary }}
              >
                View Details
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mr-1">
            <View
              className="w-24 h-24 rounded-lg overflow-hidden"
              style={{ backgroundColor: COLORS.bgTertiary }}
            >
              <Image
                source={{ uri: service.image }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                marginTop: -16,
                borderWidth: 1,
                borderColor: COLORS.borderLight,
                backgroundColor: COLORS.white,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 8,
                borderRadius: 8,
                alignSelf: "center",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity onPress={() => onAddPress?.(service)}>
                <View className="flex-row items-center">
                  <Icon name="plus" size={10} color={COLORS.primary} />
                  <Text
                    variant="caption1"
                    className="font-medium ml-1"
                    style={{ color: COLORS.primary }}
                  >
                    Add
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {!isLastInCategory && (
        <View
          className="mx-4 h-px"
          style={{ backgroundColor: COLORS.borderLight }}
        />
      )}
    </View>
  );
};

export default memo(ServiceCard);

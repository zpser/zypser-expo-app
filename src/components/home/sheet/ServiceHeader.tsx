import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/core/text";
import { LucideIcon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import RecommendedForYou from "../lists/RecomendedService";

interface ServiceData {
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  discountText?: string;
}

interface ServiceHeaderProps {
  service: ServiceData;
  onAddService?: () => void;
  onQuantityChange?: (quantity: number) => void;
  onFrequentServicePress?: (serviceId: number) => void;
  onFrequentServiceAdd?: (serviceId: number) => void;
  onViewAllFrequentServices?: () => void;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  service,
  onAddService,
  onQuantityChange,
  onFrequentServicePress,
  onFrequentServiceAdd,
  onViewAllFrequentServices,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
    if (quantity === 0) {
      onAddService?.();
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const renderStarRating = () => (
    <View className="flex-row items-center">
      <LucideIcon name="Star" size={14} color={COLORS.warning} />
      <Text
        variant="footnote"
        className="ml-1"
        style={{ color: COLORS.primaryText }}
      >
        {service.rating} ({service.reviewCount.toLocaleString()} reviews)
      </Text>
    </View>
  );

  const renderQuantityControl = () => {
    if (quantity === 0) {
      return (
        <TouchableOpacity
          onPress={handleAdd}
          className="px-6 py-2 rounded-md border ml-4"
          style={{ borderColor: COLORS.borderLight }}
          activeOpacity={0.8}
        >
          <Text
            variant="footnote"
            className="font-medium"
            style={{ color: COLORS.primary }}
          >
            + Add
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View
        className="flex-row items-center rounded-xl px-3 py-2 ml-4 border"
        style={{
          backgroundColor: COLORS.cardBg,
          borderColor: COLORS.borderLight,
          minWidth: 110,
        }}
      >
        {/* Plus Button */}
        <TouchableOpacity
          onPress={handleAdd}
          className="mr-4"
          activeOpacity={0.8}
        >
          <LucideIcon
            name="Plus"
            size={14}
            color={COLORS.primaryText}
            strokeWidth={2}
          />
        </TouchableOpacity>

        {/* Quantity Display */}
        <View className="flex-1 items-center">
          <Text
            variant="subhead"
            className="font-bold"
            style={{ color: COLORS.primary }}
          >
            {quantity}
          </Text>
        </View>

        {/* Minus Button */}
        <TouchableOpacity
          onPress={handleRemove}
          className="ml-4"
          activeOpacity={0.8}
        >
          <LucideIcon
            name="Minus"
            size={14}
            color={COLORS.primaryText}
            strokeWidth={2}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="bg-white">
      {/* Main Service Header */}
      <View className="px-2 py-3 mx-3">
        {/* Service Info */}
        <View className="flex-row justify-between items-start mb-4">
          <View className="flex-1 pr-4">
            <Text
              variant="body"
              className="mb-2 font-semibold"
              style={{ color: COLORS.primaryText }}
            >
              {service.title}
            </Text>

            {renderStarRating()}

            <View className="flex-row items-center mt-2">
              <Text
                variant="subhead"
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                ${service.price}
              </Text>
              <Text
                variant="subhead"
                className="ml-2 font-medium"
                style={{ color: COLORS.primaryText }}
              >
                • {service.duration}
              </Text>
            </View>
          </View>

          {/* Service Icon */}
          <View
            className="w-24 h-24 rounded-lg items-center justify-center"
            style={{ backgroundColor: COLORS.background }}
          >
            <LucideIcon name="Wrench" size={32} color={COLORS.primary} />
          </View>
        </View>

        {/* Discount Banner */}
        {service.discountText && (
          <View className="flex-row items-center justify-between">
            <Text
              variant="subhead"
              className="font-medium flex-1"
              style={{ color: COLORS.primary }}
            >
              {service.discountText}
            </Text>
            {renderQuantityControl()}
          </View>
        )}
      </View>

      {/* Frequently Added Services - Show only when quantity > 0 */}
      {quantity > 0 && (
        <View className="bg-allStone py-3">
          <RecommendedForYou
            showViewAll={false}
            title="Frequently added services"
            onServicePress={onFrequentServicePress}
            onAddServicePress={onFrequentServiceAdd}
            onViewAllPress={onViewAllFrequentServices}
          />
        </View>
      )}
    </View>
  );
};

export default ServiceHeader;

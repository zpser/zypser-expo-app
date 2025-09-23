import React from "react";
import { View, Image, StatusBar } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

interface OrderHeaderProps {
  imageUrl: string;
  onBackPress: () => void;
}

const FloatingBackButton = ({ onPress }: { onPress: () => void }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="ml-4 overflow-hidden rounded-full self-start"
      style={{
        marginTop: insets.top + 10,
        zIndex: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <BlurView
          intensity={40}
          tint="light"
          className="flex-row items-center py-2 px-3"
        >
          <Text
            className="text-xl mr-3"
            style={{ color: COLORS.primaryText, lineHeight: 20, marginTop: 2 }}
          >
            ←
          </Text>
          <Text
            variant="callout"
            className="font-semibold"
            style={{ color: COLORS.primaryText }}
          >
            Back
          </Text>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};

export const OrderHeader: React.FC<OrderHeaderProps> = ({
  imageUrl,
  onBackPress,
}) => {
  return (
    <View className="relative h-64">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Background Image */}
      <Image
        source={{ uri: imageUrl }}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
        style={{ zIndex: 1 }}
      />

      {/* Back Button positioned on top */}
      <View style={{ zIndex: 2 }}>
        <FloatingBackButton onPress={onBackPress} />
      </View>
    </View>
  );
};

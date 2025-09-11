import React from "react";
import { View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import CustomSvg from "@/components/core/svg/CustomSvg";

interface RepeatServiceProps {
  onPress?: () => void;
  onSetupPress?: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageUri?: string;
}

const RepeatService: React.FC<RepeatServiceProps> = ({
  onPress,
  onSetupPress,
  title = "Repeat",
  subtitle = " any service anytime",
  description = "Recurring services help you automate regular bookings. You can cancel or reschedule anytime.",
  buttonText = "Setup Recurring Service",
  imageUri = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop", // cleaning service image
}) => {
  const handleCardPress = () => {
    onPress?.();
  };

  const handleSetupPress = () => {
    onSetupPress?.();
  };

  return (
    <View className="px-4 py-3 bg-allStone">
      <TouchableOpacity onPress={handleCardPress}>
        <View 
          className="rounded-xl overflow-hidden"
          style={{ height: 349 }} // Based on CSS height
        >
          <LinearGradient
            colors={["#121628", "#0A1B3D"]}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              flex: 1,
              position: 'relative',
            }}
          >
            {/* Background Clock SVG */}
            <View
              className="absolute opacity-100"
              style={{
                right: -42,
                top: -12,
                width: 121,
                height: 121,
              }}
            >
              <CustomSvg
                name="clock"
                width={100}
                height={100}
                fill="#FFFFFF"
              />
            </View>

            {/* Top Section with Text Content */}
            <View 
              className="px-4 pt-4 pb-4"
              style={{ }} // Based on CSS
            >
             

              {/* Content */}
              <View className="relative z-10  justify-center gap-3">
                {/* Title */}
                <View>
                  <Text 
                    variant="heading"
                    className="text-white font-bold"
                    style={{ fontSize: 18, lineHeight: 22 }}
                  >
                    <Text className="text-primaryButton">{title}</Text>
                    <Text className="text-white">{subtitle}</Text>
                  </Text>
                </View>

                {/* Description */}
                <View style={{  }}>
                  <Text 
                    variant="footnote"
                    className="text-white opacity-60 font-medium"
                    style={{ lineHeight: 17 }}
                  >
                    {description}
                  </Text>
                </View>
              </View>
            </View>

            {/* Bottom Section with Image */}
            <View className="flex-1 relative">
              <ImageBackground
                source={{ uri: imageUri }}
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}
                imageStyle={{
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                {/* Dark gradient overlay on image */}
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}
                  locations={[0, 1]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />

                {/* Setup Button */}
                <View className="p-4">
                  <TouchableOpacity
                    onPress={handleSetupPress}
                    style={{
                      alignSelf: 'flex-start',
                    }}
                  >
                    <View 
                      className="bg-white px-4 py-3 rounded"
                      style={{
                        width: 179,
                        height: 41,
                        justifyContent: 'center',
                      }}
                    >
                      <Text 
                        variant="footnote"
                        className="text-primaryButton font-bold text-center"
                        style={{ fontSize: 14, lineHeight: 17 }}
                      >
                        {buttonText}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RepeatService;
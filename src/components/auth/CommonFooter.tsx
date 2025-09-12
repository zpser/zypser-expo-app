import React from "react";
import { View, Text, ViewStyle, TextStyle, StyleProp } from "react-native";

interface FooterProps {
  highlightText?: string; // optional highlighted text
  regularText?: string; // optional regular text
  className?: string; // extra Tailwind classes for container
  textClassName?: string; // extra Tailwind classes for text
  style?: StyleProp<ViewStyle>; // extra inline styles for container
  textStyle?: StyleProp<TextStyle>; // extra inline styles for text
}

const Footer: React.FC<FooterProps> = ({
  highlightText = "zypser",
  regularText = "customers",
  className = "",
  textClassName = "",
  style,
  textStyle,
}) => {
  return (
    <View className={`px-6 pb-8 pt-4 ${className}`} style={style}>
      <Text
        className={`text-center text-black font-medium text-lg ${textClassName}`}
        style={textStyle}
      >
        <Text className="text-primaryButton italic">{highlightText}</Text>{" "}
        {regularText}
      </Text>
    </View>
  );
};

export default Footer;

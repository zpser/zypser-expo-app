import { ICONS } from "@/util/constant/icons";
import { IMAGES } from "@/util/constant/images";
import React from "react";
import { View } from "react-native";

type SvgKeys = keyof typeof IMAGES | keyof typeof ICONS;

interface CustomSvgProps {
  name: SvgKeys;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const CustomSvg: React.FC<CustomSvgProps> = ({
  name,
  width = 24,
  height = 24,
  fill,
  className,
}) => {
  const SvgComponent =
    IMAGES[name as keyof typeof IMAGES] || ICONS[name as keyof typeof ICONS];

  if (!SvgComponent) {
    console.warn(`⚠️ SVG "${name}" not found in IMAGES or ICONS.`);
    return null;
  }

  return (
    <View className={className}>
      <SvgComponent width={width} height={height} fill={fill} />
    </View>
  );
};

export default CustomSvg;

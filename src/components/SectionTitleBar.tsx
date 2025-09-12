import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/core/text';
import { cn } from '@/lib/cn';

interface SectionTitleBarProps {
  // Required props
  title: string;
  
  // Optional props
  onViewAllPress?: () => void;
  showViewAll?: boolean;
  viewAllText?: string;
  
  // Styling props
  containerClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  
  // Custom variants
  titleVariant?: 'largeTitle' | 'title1' | 'title2' | 'title3' | 'heading' | 'body' | 'callout' | 'subhead' | 'footnote' | 'caption1' | 'caption2';
  buttonTextVariant?: 'largeTitle' | 'title1' | 'title2' | 'title3' | 'heading' | 'body' | 'callout' | 'subhead' | 'footnote' | 'caption1' | 'caption2';
  
  // Additional props
  disabled?: boolean;
}

const SectionTitleBar: React.FC<SectionTitleBarProps> = ({
  title,
  onViewAllPress,
  showViewAll = true,
  viewAllText = "View All",
  containerClassName,
  titleClassName,
  buttonClassName,
  buttonTextClassName,
  titleVariant = "heading",
  buttonTextVariant = "caption1",
  disabled = false,
}) => {
  return (
    <View 
      className={cn(
        "flex-row justify-between items-center mb-6 px-4",
        containerClassName
      )}
    >
      {/* Title */}
      <Text 
        variant={titleVariant}
        className={cn(
          "text-gray-900 font-bold flex-1",
          titleClassName
        )}
        numberOfLines={2}
      >
        {title}
      </Text>

      {/* View All Button */}
      {showViewAll && (
        <TouchableOpacity
          className={cn(
            "px-3 py-2 rounded-full bg-gray-100 border border-gray-200 ml-3",
            disabled && "opacity-50",
            buttonClassName
          )}
          onPress={onViewAllPress}
          disabled={disabled || !onViewAllPress}
          activeOpacity={0.7}
        >
          <Text 
            variant={buttonTextVariant}
            className={cn(
              "text-gray-900 font-medium",
              buttonTextClassName
            )}
          >
            {viewAllText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionTitleBar;
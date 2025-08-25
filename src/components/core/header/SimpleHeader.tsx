import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

interface SimpleHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-4 bg-transparent">
      <View className="flex-row items-center flex-1">
        {showBackButton && (
          <TouchableOpacity 
            onPress={handleBackPress} 
            className="mr-4"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text className="text-primaryButton text-2xl">←</Text>
          </TouchableOpacity>
        )}
        <Text className="text-xl font-semibold text-gray-900 flex-1" numberOfLines={1}>
          {title}
        </Text>
      </View>
      
      {rightComponent && (
        <View className="ml-4">
          {rightComponent}
        </View>
      )}
    </View>
  );
};

export default SimpleHeader;

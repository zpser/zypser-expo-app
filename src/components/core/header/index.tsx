import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

interface CustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  backButtonColor?: string;
  statusBarStyle?: 'light' | 'dark';
  centerTitle?: boolean;
}




const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
  leftComponent,
  backgroundColor = 'transparent',
  textColor = '#111827', // gray-900
  backButtonColor = '#7D4DEE', // primaryButton
  statusBarStyle = 'dark',
  centerTitle = false,
}) => {
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundColor}
        translucent={Platform.OS === 'android'}
      />
      <View
        className="flex-row items-center px-4"
        style={{
          paddingTop: Platform.OS === 'ios' ? 0 : insets.top,
          backgroundColor,
          height: 56,
        }}
      >
        {/* Left Section */}
        <View className="flex-row items-center">
          {showBackButton && (
            <TouchableOpacity 
              onPress={handleBackPress} 
              className="mr-3 -ml-1"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ minWidth: 32, minHeight: 32, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text 
                className="text-2xl font-normal leading-none"
                style={{ color: backButtonColor, lineHeight: 24 }}
              >
                ←
              </Text>
            </TouchableOpacity>
          )}
          
          {leftComponent && (
            <View className="mr-3">
              {leftComponent}
            </View>
          )}
        </View>


        {/* Center/Title Section */}
        <View className={`flex-1 ${centerTitle ? 'items-center' : 'items-start'}`}>
          {title && (
            <Text 
              className="font-semibold text-[20px] leading-[100%] leading-none"
              style={{ color: textColor, lineHeight: 24 }}
              numberOfLines={1}
            >
              {title}
            </Text>
          )}
        </View>

        {/* Right Section */}
        <View className="flex-row items-center justify-end">
          {rightComponent && rightComponent}
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

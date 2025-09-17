import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import React, { useCallback, useState } from "react";
import { serviceCategories } from "@/assets/data/home";
import type { CustomBottomSheetRef } from "@/components/core/bottomsheet/CustomBottomSheet";
import { router } from "expo-router";

export const useHomeLogic = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useSharedValue(0);

  // Cart state
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const handleQuantityChange = useCallback((quantity: number) => {
    setCartQuantity(quantity);
  }, []);

  // Bottom sheet helpers
  const openServiceDetail = useCallback((ref?: CustomBottomSheetRef | null) => {
    // ref?.expand();
    // setTimeout(() => {
    //   ref?.snapToIndex(0);
    // }, 200);
  }, []);

  // Dynamic height calculations
  const TOP_BAR_HEIGHT = 48;
  const SEARCH_BAR_HEIGHT = 56;
  const POPULAR_SERVICES_HEADER_HEIGHT = 40;
  const SERVICE_GRID_HEIGHT = 240;
  const PADDING_VERTICAL = 32;

  // Minimum height (collapsed) = SafeArea + TopBar + SearchBar + padding
  const HEADER_MIN_HEIGHT =
    insets.top + TOP_BAR_HEIGHT + SEARCH_BAR_HEIGHT + 36;

  // Maximum height (expanded) = All components
  const HEADER_MAX_HEIGHT =
    insets.top +
    TOP_BAR_HEIGHT +
    SEARCH_BAR_HEIGHT +
    POPULAR_SERVICES_HEADER_HEIGHT +
    SERVICE_GRID_HEIGHT +
    PADDING_VERTICAL +
    36;

  const SCROLL_THRESHOLD = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  // Event handlers
  const handleSearch = (text: string) => {
    console.log("Search:", text);
  };

  const handleServicePress = (serviceId: number) => {
    console.log("Service selected:", serviceId);
  };

  const handleNotificationPress = () => {
    console.log("Notification pressed");
  };

  const handleCartPress = () => {
    console.log("Cart pressed");
  };

  const handleLocationPress = () => {
    console.log("Location pressed");
  };

  const handlePopularServicesViewAll = () => {
    console.log("Popular Services View All pressed");
  };

  const handleRecommendedServicePress = (id: number) => {
    console.log("Service pressed:", id);
  };

  const handleRecommendedViewAllPress = () => {
    console.log("View All pressed");
  };

  const handleAddServicePress = (id: number) => {
    console.log("Add service:", id);
  };

  const handleZypserCoverPress = () => {
    console.log("Zypser Cover banner pressed");
  };

  const handleFeaturedServicePress = (id: number) => {
    router.push("/id");
    console.log("Featured service pressed:", id);
  };

  const handleFeaturedViewAllPress = () => {
    console.log("View All Featured Services pressed");
  };

  const handleRepeatServicePress = () => {
    console.log("Repeat service card pressed");
  };

  const handleSetupPress = () => {
    console.log("Setup recurring service pressed");
  };

  // Scroll handler
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // Animated styles for header
  const headerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, SCROLL_THRESHOLD],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolation.CLAMP
    );

    return { height };
  });

  // Animated styles for popular services section
  const popularServicesAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, SCROLL_THRESHOLD * 0.7, SCROLL_THRESHOLD],
      [1, 0.3, 0],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      scrollY.value,
      [0, SCROLL_THRESHOLD],
      [1, 0.8],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return {
    // Data
    serviceCategories,
    insets,

    // Cart
    cartQuantity,
    handleQuantityChange,
    openServiceDetail,

    // Constants
    TOP_BAR_HEIGHT,
    SEARCH_BAR_HEIGHT,
    POPULAR_SERVICES_HEADER_HEIGHT,
    HEADER_MAX_HEIGHT,

    // Event handlers
    handleSearch,
    handleServicePress,
    handleNotificationPress,
    handleCartPress,
    handleLocationPress,
    handlePopularServicesViewAll,
    handleRecommendedServicePress,
    handleRecommendedViewAllPress,
    handleAddServicePress,
    handleZypserCoverPress,
    handleFeaturedServicePress,
    handleFeaturedViewAllPress,
    handleRepeatServicePress,
    handleSetupPress,

    // Animation
    scrollHandler,
    headerAnimatedStyle,
    popularServicesAnimatedStyle,
  };
};

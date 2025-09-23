import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

export const useHomeAnimation = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useSharedValue(0);

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
    insets,
    TOP_BAR_HEIGHT,
    SEARCH_BAR_HEIGHT,
    POPULAR_SERVICES_HEADER_HEIGHT,
    HEADER_MAX_HEIGHT,
    scrollHandler,
    headerAnimatedStyle,
    popularServicesAnimatedStyle,
  };
};

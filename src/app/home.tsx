import React from "react";
import { View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import RecommendedForYou from "@/components/home/recommended/RecomendedService";
import ZypserCoverBanner from "@/components/home/coverbanner/CoverBanner";
import FeaturedServices from "@/components/home/service/FeaturedService";
import RepeatService from "@/components/home/service/RepeatService";
import HomeSearch from "@/components/home/search/HomeSearch";
import PopularService from "@/components/home/service/PopularService";
import HomeHeader from "@/components/home/header/Header";
import { useHomeLogic } from "@/hooks/homeLogic";

const Home = () => {
  const {
    // Data
    serviceCategories,
    insets,
    
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
  } = useHomeLogic();

  return (
    <View className="flex-1 bg-allStone">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Fixed Collapsible Header */}
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          },
          headerAnimatedStyle,
        ]}
      >
        <LinearGradient
          colors={["#121628", "#0A1B3D", "#121628"]}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View style={{ paddingTop: insets.top, flex: 1 }}>
            <View className="px-4 pt-4 flex-1">
              {/* Header Component */}
              <HomeHeader
                height={TOP_BAR_HEIGHT}
                onLocationPress={handleLocationPress}
                onNotificationPress={handleNotificationPress}
                onCartPress={handleCartPress}
              />

              {/* Search Component */}
              <HomeSearch
                height={SEARCH_BAR_HEIGHT}
                onSearch={handleSearch}
              />

              {/* Popular Services Component */}
              <PopularService
                services={serviceCategories}
                animatedStyle={popularServicesAnimatedStyle}
                headerHeight={POPULAR_SERVICES_HEADER_HEIGHT}
                onServicePress={handleServicePress}
                onViewAllPress={handlePopularServicesViewAll}
              />
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        className="bg-allStone"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: HEADER_MAX_HEIGHT,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Content Sections */}
        <View className="bg-white">
          {/* Recommended Services */}
          <RecommendedForYou
            onServicePress={handleRecommendedServicePress}
            onViewAllPress={handleRecommendedViewAllPress}
            onAddServicePress={handleAddServicePress}
          />

          <ZypserCoverBanner onPress={handleZypserCoverPress} />

          <FeaturedServices
            onServicePress={handleFeaturedServicePress}
            onViewAllPress={handleFeaturedViewAllPress}
          />

          <RecommendedForYou
            onServicePress={handleRecommendedServicePress}
            onViewAllPress={handleRecommendedViewAllPress}
            onAddServicePress={handleAddServicePress}
          />

          <RepeatService
            onPress={handleRepeatServicePress}
            onSetupPress={handleSetupPress}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
import React, { useEffect, useRef } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { router } from "expo-router";
import RecommendedForYou from "@/components/home/lists/RecomendedService";
import ZypserCoverBanner from "@/components/home/banner/CoverBanner";
import FeaturedServices from "@/components/home/lists/FeaturedService";
import RepeatService from "@/components/home/banner/RepeatServiceBanner";
import HomeSearch from "@/components/home/search/HomeSearch";
import PopularService from "@/components/home/lists/PopularService";
import HomeHeader from "@/components/home/header/Header";
import { useHomeAnimation } from "@/hooks/home/useHomeAnimation";
import { useHomeCart } from "@/hooks/home/useHomeCart";
import { useHomeBottomSheet } from "@/hooks/home/useHomeBottomSheet";
import ServiceDetailBottomSheet from "@/components/home/sheet/ServiceDetailBottomSheet";
import { CustomBottomSheetRef } from "@/components/core/bottomsheet/CustomBottomSheet";
import { faqs, processSteps, serviceDataa } from "@/assets/data/bottomsheet";
import { serviceCategories } from "@/assets/data/home";
import { COLORS } from "@/util/constant/colors";
import { getServiceDetailRoute } from "@/util/constant/routes";

const Home = () => {
  const serviceBottomSheetRef = useRef<CustomBottomSheetRef>(null);

  const {
    insets,
    TOP_BAR_HEIGHT,
    SEARCH_BAR_HEIGHT,
    POPULAR_SERVICES_HEADER_HEIGHT,
    HEADER_MAX_HEIGHT,
    scrollHandler,
    headerAnimatedStyle,
    popularServicesAnimatedStyle,
  } = useHomeAnimation();

  const { cartQuantity, handleQuantityChange } = useHomeCart();
  const { openServiceDetail } = useHomeBottomSheet();

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
    router.push(getServiceDetailRoute(id.toString()));
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

  useEffect(() => {
    const timer = setTimeout(() => {
      openServiceDetail(serviceBottomSheetRef.current);
    }, 1000);
    return () => clearTimeout(timer);
  }, [openServiceDetail]);

  const handleAddService = () => {};

  const handleBookNow = () => {
    serviceBottomSheetRef.current?.close();
  };

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
          colors={[COLORS.primaryText, COLORS.gradient3, COLORS.primaryText]}
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
              <HomeSearch height={SEARCH_BAR_HEIGHT} onSearch={handleSearch} />

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
          paddingBottom: 120,
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

          {/* Test Button for Bottom Sheet */}
          <View className="p-4">
            <TouchableOpacity
              onPress={() => openServiceDetail(serviceBottomSheetRef.current)}
              className="bg-blue-500 py-3 px-6 rounded-lg items-center"
            ></TouchableOpacity>
          </View>
        </View>
      </Animated.ScrollView>

      <ServiceDetailBottomSheet
        ref={serviceBottomSheetRef}
        service={serviceDataa}
        processSteps={processSteps}
        faqs={faqs}
        onAddService={handleAddService}
        onBookNow={handleBookNow}
        cartQuantity={cartQuantity}
        onQuantityChange={handleQuantityChange}
      />
    </View>
  );
};

export default Home;

import { faqs, processSteps, serviceDataa } from "@/assets/data/bottomsheet";
import { categoryData, serviceData } from "@/assets/data/service";
import { CustomBottomSheetRef } from "@/components/core/bottomsheet/CustomBottomSheet";
import FeatureHeader from "@/components/featured-service/FeatureHeader";
import UnifiedServiceScreen from "@/components/featured-service/UnifiedList";
import ServiceDetailBottomSheet from "@/components/home/sheet/ServiceDetailBottomSheet";
import { router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { View } from "react-native";

const ServiceScreen = () => {
  const serviceBottomSheetRef = useRef<CustomBottomSheetRef>(null);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const handleQuantityChange = useCallback((quantity: number) => {
    setCartQuantity(quantity);
  }, []);
  const openSheet = () => {
    serviceBottomSheetRef.current?.expand();
    setTimeout(() => {
      serviceBottomSheetRef.current?.snapToIndex(0);
    }, 150);
  };
  const onBackPress = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-allStone">
      <FeatureHeader onBackPress={onBackPress} />
      <UnifiedServiceScreen
        categoryData={categoryData}
        serviceData={serviceData}
        onCategoryPress={() => {}}
        numColumns={4}
        onViewDetailsPress={openSheet}
        onAddPress={openSheet}
      />
      <ServiceDetailBottomSheet
        ref={serviceBottomSheetRef}
        service={serviceDataa}
        processSteps={processSteps}
        faqs={faqs}
        cartQuantity={cartQuantity}
        onQuantityChange={handleQuantityChange}
      />
    </View>
  );
};

export default ServiceScreen;

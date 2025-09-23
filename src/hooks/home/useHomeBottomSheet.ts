import { useCallback } from "react";
import type { CustomBottomSheetRef } from "@/components/core/bottomsheet/CustomBottomSheet";

export const useHomeBottomSheet = () => {
  const openServiceDetail = useCallback((ref?: CustomBottomSheetRef | null) => {
    // ref?.expand();
    // setTimeout(() => {
    //   ref?.snapToIndex(0);
    // }, 200);
  }, []);

  return {
    openServiceDetail,
  };
};

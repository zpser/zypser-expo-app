import { useState, useCallback } from "react";

export const useHomeCart = () => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const handleQuantityChange = useCallback((quantity: number) => {
    setCartQuantity(quantity);
  }, []);

  return {
    cartQuantity,
    handleQuantityChange,
  };
};

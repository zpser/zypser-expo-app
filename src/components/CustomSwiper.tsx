import React, { useRef, useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

interface CustomSwiperProps {
  children: React.ReactNode[];
  height: number;
  slidesPerView?: number;
  delay?: number;
  autoScroll?: boolean;
  showDots?: boolean;
  className?: string;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  height,
  slidesPerView = 1,
  delay = 3000,
  autoScroll = false,
  showDots = false,
  className = '',
}) => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { width } = Dimensions.get('window');

  useEffect(() => {
    if (autoScroll && children.length > 1) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => {
          const nextPage = (prevPage + 1) % children.length;
          pagerRef.current?.setPage(nextPage);
          return nextPage;
        });
      }, delay);

      return () => clearInterval(interval);
    }
  }, [autoScroll, delay, children.length]);

  const handlePageSelected = (event: any) => {
    setCurrentPage(event.nativeEvent.position);
  };

  return (
    <View className={`${className}`} style={{ height, width: '100%' }}>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={handlePageSelected}
      >
        {children.map((child, index) => (
          <View key={index} style={{ flex: 1 }}>
            {child}
          </View>
        ))}
      </PagerView>
      
      {showDots && (
        <View className="flex-row justify-center items-center mt-4 gap-2">
          {children.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentPage ? 'bg-primaryButton' : 'bg-gray-300'
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomSwiper;


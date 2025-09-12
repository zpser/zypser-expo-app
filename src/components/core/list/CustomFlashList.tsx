import React, { forwardRef, useCallback } from 'react';
import {
  View,
  ViewStyle,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  FlashList,
  FlashListProps,
  ListRenderItem,
} from '@shopify/flash-list';
import { Text } from '@/components/core/text';

export interface CustomFlashListProps<T>
  extends Omit<FlashListProps<T>, 'renderItem' | 'data'> {
  data: T[] | null | undefined;
  renderItem: ListRenderItem<T>;

  containerStyle?: ViewStyle;
  containerClassName?: string;

  loading?: boolean;
  loadingMore?: boolean;

  emptyComponent?: React.ComponentType | React.ReactElement | null;
  emptyText?: string;
  emptyStyle?: ViewStyle;
  emptyClassName?: string;

  errorComponent?: React.ComponentType | React.ReactElement | null;
  errorText?: string;
  errorStyle?: ViewStyle;
  errorClassName?: string;
  hasError?: boolean;

  loadingComponent?: React.ComponentType | React.ReactElement | null;
  loadingMoreComponent?: React.ComponentType | React.ReactElement | null;
  loadingClassName?: string;

  onRefresh?: () => void;
}

function CustomFlashListComponent<T>(
  {
    data,
    renderItem,

    containerStyle,
    containerClassName,

    loading = false,
    loadingMore = false,

    emptyComponent,
    emptyText = 'No items found',
    emptyStyle,
    emptyClassName,

    errorComponent,
    errorText = 'Something went wrong',
    errorStyle,
    errorClassName,
    hasError = false,

    loadingComponent,
    loadingMoreComponent,
    loadingClassName,

    onRefresh,

    estimatedItemSize = 50,
    horizontal = false,
    numColumns,
    onEndReached,
    onEndReachedThreshold = 0.1,
    refreshing,

    ...flashListProps
  }: CustomFlashListProps<T>,
  ref: React.Ref<FlashList<T>>
) {
  const handleRefresh = useCallback(() => {
    onRefresh?.();
  }, [onRefresh]);

  const handleEndReached = useCallback(() => {
    if (!loadingMore && onEndReached) {
      onEndReached();
    }
  }, [onEndReached, loadingMore]);

  /** Safely render either ReactElement or ComponentType */
  const renderCustom = (
    component?: React.ComponentType | React.ReactElement | null
  ) => {
    if (!component) return null;
    if (React.isValidElement(component)) return component;
    if (typeof component === 'function') return React.createElement(component);
    return null;
  };

  const renderLoadingComponent = () =>
    renderCustom(loadingComponent) ?? (
      <View
        className={`flex-1 justify-center items-center py-8 ${loadingClassName || ''}`}
      >
        <ActivityIndicator size="large" color="#1A48A3" />
        <Text variant="body" className="text-gray-500 mt-2">
          Loading...
        </Text>
      </View>
    );

  const renderEmptyComponent = () => {
    if (loading) return null;
    return (
      renderCustom(emptyComponent) ?? (
        <View
          className={`flex-1 justify-center items-center py-8 ${emptyClassName || ''}`}
          style={emptyStyle}
        >
          <Text variant="body" className="text-gray-500 text-center">
            {emptyText}
          </Text>
        </View>
      )
    );
  };

  const renderErrorComponent = () =>
    renderCustom(errorComponent) ?? (
      <View
        className={`flex-1 justify-center items-center py-8 ${errorClassName || ''}`}
        style={errorStyle}
      >
        <Text variant="body" className="text-red-500 text-center">
          {errorText}
        </Text>
      </View>
    );

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      renderCustom(loadingMoreComponent) ?? (
        <View className="py-4 justify-center items-center">
          <ActivityIndicator size="small" color="#1A48A3" />
        </View>
      )
    );
  };

  if (loading && (!data || data.length === 0)) {
    return (
      <View
        className={containerClassName}
        style={[{ flex: 1 }, containerStyle]}
      >
        {renderLoadingComponent()}
      </View>
    );
  }

  if (hasError) {
    return (
      <View
        className={containerClassName}
        style={[{ flex: 1 }, containerStyle]}
      >
        {renderErrorComponent()}
      </View>
    );
  }

  return (
    <View
      className={containerClassName}
      style={[{ flex: 1 }, containerStyle]}
      testID={flashListProps.testID}
    >
      <FlashList
        ref={ref}
        data={data}
        renderItem={renderItem}
        estimatedItemSize={estimatedItemSize}
        horizontal={horizontal}
        numColumns={numColumns}
        ListEmptyComponent={renderEmptyComponent}
        ListFooterComponent={renderFooter}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing || false}
              onRefresh={handleRefresh}
              colors={['#1A48A3']}
              tintColor="#1A48A3"
            />
          ) : undefined
        }
        onEndReached={onEndReached ? handleEndReached : undefined}
        onEndReachedThreshold={onEndReachedThreshold}
        {...flashListProps}
      />
    </View>
  );
}

const CustomFlashList = forwardRef(CustomFlashListComponent) as <T>(
  props: CustomFlashListProps<T> & { ref?: React.Ref<FlashList<T>> }
) => React.ReactElement;

(CustomFlashList as any).displayName = 'CustomFlashList';

export default CustomFlashList;
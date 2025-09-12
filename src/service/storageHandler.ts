import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export const IS_LOGIN = "is_login";
export const PROFILE_COMPLETED = "profile_completed";
export const FIRST_LOGIN_DATE = "first_login_date";

export const getStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log(e);
  }
};

export const setStorageData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

// Secure storage functions using Expo SecureStore
export const getEncryptedStorageData = async (key: string) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log(e);
  }
};

export const setEncryptedStorageData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const removeEncryptedStorageData = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.log(e);
  }
};

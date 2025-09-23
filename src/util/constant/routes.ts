import type { Href } from "expo-router";

export const ROUTES = {
  INDEX: "/",
  SPLASH: "/splash",
  WELCOME: "/welcome",
  FETCH_LOCATION: "/fetchlocation",
  PROFILE_DETAIL: "/profileDetail",
  MODAL: "/modal",

  AUTH: {
    ROOT: "/auth",
    JOIN_NETWORK: "/auth/join-our-network",
    LOGIN: "/auth/login",
    OTP: "/auth/otp",
  },

  BOTTOM_TAB: {
    ROOT: "/(bottomtab)",
    HOME: "/(bottomtab)/home",
    BROWSE: "/(bottomtab)/browse",
    ORDERS: "/(bottomtab)/orders",
    ACCOUNT: "/(bottomtab)/account",
  },

  ORDERS: {
    ROOT: "/(bottomtab)/orders",
    INDEX: "/(bottomtab)/orders/",
    TOP_TABS: "/(bottomtab)/orders/(toptabs)",
    CURRENT: "/(bottomtab)/orders/(toptabs)/current",
    PAST: "/(bottomtab)/orders/(toptabs)/past",
    CANCELED: "/(bottomtab)/orders/(toptabs)/canceled",
  },

  ACCOUNT: {
    ROOT: "/(bottomtab)/account",
    PROFILE: "/(bottomtab)/account/profile",
    YOUR_ACCOUNT: "/(bottomtab)/account/youraccount",
    REFERRAL: "/(bottomtab)/account/referral",
    PRIVACY: "/(bottomtab)/account/privacyacc",
    NOTIFICATIONS: "/(bottomtab)/account/notifications",
  },

  SERVICE: {
    ROOT: "/[service]",
  },

  UNMATCHED: "/[...unmatched]",
} as const;

export const getOrderDetailRoute = (orderId: string): Href =>
  `/(bottomtab)/orders/${orderId}` as Href;

export const getServiceDetailRoute = (serviceName: string): Href =>
  `/${serviceName}` as Href;

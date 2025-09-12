/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(bottomtab)` | `/(bottomtab)/account` | `/(bottomtab)/browse` | `/(bottomtab)/home` | `/(bottomtab)/orders` | `/_sitemap` | `/account` | `/auth` | `/auth/join-our-network` | `/auth/login` | `/auth/otp` | `/browse` | `/home` | `/modal` | `/orders` | `/profileDetail` | `/welcome`;
      DynamicRoutes: `/${string}`;
      DynamicRouteTemplate: `/[...unmatched]`;
    }
  }
}

/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(bottomtab)` | `/(bottomtab)/account` | `/(bottomtab)/browse` | `/(bottomtab)/home` | `/(bottomtab)/orders` | `/(bottomtab)/orders/` | `/(bottomtab)/orders/(toptabs)` | `/(bottomtab)/orders/(toptabs)/canceled` | `/(bottomtab)/orders/(toptabs)/current` | `/(bottomtab)/orders/(toptabs)/past` | `/(bottomtab)/orders/canceled` | `/(bottomtab)/orders/current` | `/(bottomtab)/orders/past` | `/_sitemap` | `/account` | `/auth` | `/auth/join-our-network` | `/auth/login` | `/auth/otp` | `/browse` | `/fetchlocation` | `/home` | `/modal` | `/orders` | `/orders/` | `/orders/(toptabs)` | `/orders/(toptabs)/canceled` | `/orders/(toptabs)/current` | `/orders/(toptabs)/past` | `/orders/canceled` | `/orders/current` | `/orders/past` | `/profileDetail` | `/splash` | `/welcome`;
      DynamicRoutes: `/${string}` | `/(bottomtab)/orders/${Router.SingleRoutePart<T>}` | `/orders/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(bottomtab)/orders/[orderId]` | `/[...unmatched]` | `/orders/[orderId]`;
    }
  }
}

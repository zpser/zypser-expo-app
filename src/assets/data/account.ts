export interface AccountProfileData {
  user: {
    firstName: string;
    lastName: string;
    memberSince: string;
    avatarUrl?: string;
  };
  sections: Array<{
    title: string;
    items: Array<{
      iconName: string;
      iconType?: "ionicon" | "lucide";
      title: string;
      subtitle: string;
      showBadge?: boolean;
      badgeText?: string;
      route?: string;
      onPress?: () => void;
    }>;
  }>;
  appInfo: {
    name: string;
    role: string;
    version: string;
  };
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

export interface NotificationSettings {
  serviceNotifications: NotificationItem[];
  marketingPromotions: NotificationItem[];
  communicationChannels: NotificationItem[];
}

export interface PrivacyItem {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

export interface PrivacySettings {
  privacySettings: PrivacyItem[];
  accessibilitySettings: PrivacyItem[];
}

export interface UserProfile {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatarUrl: string;
}

export interface ReferralReward {
  id: string;
  title: string;
  description: string;
  amount: string;
  status: "earned" | "pending" | "available";
  date?: string;
}

export interface ReferralData {
  referralCode: string;
  description: string;
  rewards: ReferralReward[];
  howItWorks: Array<{
    id: string;
    step: string;
  }>;
}

export const ACCOUNT_PROFILE: AccountProfileData = {
  user: {
    firstName: "Beverly",
    lastName: "Marconi",
    memberSince: "2025",
    avatarUrl: "https://via.placeholder.com/96x96",
  },
  sections: [
    {
      title: "ACCOUNT",
      items: [
        {
          iconName: "person-outline",
          iconType: "ionicon",
          title: "Your Account",
          subtitle: "Profile & preferences",
          route: "/account/youraccount",
          onPress: () => console.log("Your Account pressed"),
        },
        {
          iconName: "notifications-outline",
          iconType: "ionicon",
          title: "Notifications",
          subtitle: "Communication preferences",
          route: "/account/notifications",
          onPress: () => console.log("Notifications pressed"),
        },
        {
          iconName: "shield-outline",
          iconType: "ionicon",
          title: "Privacy & Accessibility",
          subtitle: "Manage settings",
          route: "/account/privacyacc",
          onPress: () => console.log("Privacy pressed"),
        },
        {
          iconName: "heart-outline",
          iconType: "ionicon",
          title: "Pets / Special Requirements",
          subtitle: "Add pets and notes",
          route: "/account/pets",
          onPress: () => console.log("Pets pressed"),
        },
      ],
    },
    {
      title: "PROMOTION",
      items: [
        {
          iconName: "card-outline",
          iconType: "ionicon",
          title: "Referrals & Coupons",
          subtitle: "Earn rewards",
          route: "/account/referral",
          onPress: () => console.log("Referrals pressed"),
        },
        {
          iconName: "gift-outline",
          iconType: "ionicon",
          title: "Send a Gift",
          subtitle: "Gift services to others",
          route: "/promotions/gift",
          onPress: () => console.log("Send Gift pressed"),
        },
      ],
    },
    {
      title: "BUSINESS",
      items: [
        {
          iconName: "people-outline",
          iconType: "ionicon",
          title: "Register as Partner",
          subtitle: "Join our network",
          showBadge: true,
          badgeText: "New",
          route: "/business/partner",
          onPress: () => console.log("Partner pressed"),
        },
      ],
    },
    {
      title: "HELP & SUPPORT",
      items: [
        {
          iconName: "information-circle-outline",
          iconType: "ionicon",
          title: "About Us",
          subtitle: "Learn more about zypser",
          route: "/support/about",
          onPress: () => console.log("About pressed"),
        },
        {
          iconName: "help-circle-outline",
          iconType: "ionicon",
          title: "Help",
          subtitle: "Get support",
          route: "/support/help",
          onPress: () => console.log("Help pressed"),
        },
      ],
    },
  ],
  appInfo: {
    name: "Zypser",
    role: "Customer",
    version: "v1.01",
  },
};

export const NOTIFICATION_SETTINGS: NotificationSettings = {
  serviceNotifications: [
    {
      id: "service-updates",
      title: "Service Updates",
      description: "Booking confirmations, status updates, completion",
      isEnabled: true,
    },
    {
      id: "booking-reminders",
      title: "Booking Reminders",
      description: "Reminders about upcoming service appointments",
      isEnabled: true,
    },
    {
      id: "payment-confirmations",
      title: "Payment Confirmations",
      description: "Payment receipts and transaction confirmations",
      isEnabled: true,
    },
  ],
  marketingPromotions: [
    {
      id: "promotions-discounts",
      title: "Promotions & Discounts",
      description: "Special offers, seasonal deals, and discount codes",
      isEnabled: true,
    },
    {
      id: "feature-announcements",
      title: "Feature Announcements",
      description: "New features, app updates, and service additions",
      isEnabled: false,
    },
  ],
  communicationChannels: [
    {
      id: "push-notifications",
      title: "Push Notification",
      description: "In-app notifications on your device",
      isEnabled: true,
    },
    {
      id: "email-communications",
      title: "Email Communications",
      description: "Marketing emails and newsletters",
      isEnabled: false,
    },
    {
      id: "sms-marketing",
      title: "SMS Marketing",
      description: "Text messages for promotions",
      isEnabled: false,
    },
  ],
};

export const PRIVACY_SETTINGS: PrivacySettings = {
  privacySettings: [
    {
      id: "app-tracking-protection",
      title: "App Tracking Protection",
      description: "Block apps from tracking your activity",
      isEnabled: true,
    },
    {
      id: "biometric-login",
      title: "Biometric Login",
      description: "Use Face ID or Touch ID to sign in",
      isEnabled: true,
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      description: "Share usage data to improve services",
      isEnabled: true,
    },
    {
      id: "location-access",
      title: "Location Access",
      description: "Allow location for better reach",
      isEnabled: true,
    },
  ],
  accessibilitySettings: [
    {
      id: "high-contrast-mode",
      title: "High Contrast Mode",
      description: "Increase contrast for better visibility",
      isEnabled: true,
    },
    {
      id: "large-font-size",
      title: "Large Font Size",
      description: "Use larger text throughout the app",
      isEnabled: false,
    },
  ],
};

export const USER_PROFILE: UserProfile = {
  name: "Beverly Marconi",
  email: "beverlymarconi@gmail.com",
  phoneNumber: "+1 (555) 123-4567",
  address: "12 Nexus St, Melbo...",
  avatarUrl: "https://via.placeholder.com/120x120",
};

export const REFERRAL_DATA: ReferralData = {
  referralCode: "JOHN2024",
  description: "Share your code and both you and your friend get $10 off!",
  rewards: [
    {
      id: "reward-1",
      title: "First Referral Bonus",
      description: "Earned when your friend books their first service",
      amount: "$10",
      status: "available",
    },
    {
      id: "reward-2",
      title: "Multiple Referral Bonus",
      description: "Earn extra rewards with multiple referrals",
      amount: "$5",
      status: "available",
    },
  ],
  howItWorks: [
    {
      id: "step-1",
      step: "Share your referral code with friends",
    },
    {
      id: "step-2",
      step: "They get $10 off their first service",
    },
    {
      id: "step-3",
      step: "You earn $10 credit when they book",
    },
    {
      id: "step-4",
      step: "Earn extra rewards with multiple referrals",
    },
  ],
};

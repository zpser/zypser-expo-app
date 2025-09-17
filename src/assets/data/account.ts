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
          route: "/promotions/referrals",
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

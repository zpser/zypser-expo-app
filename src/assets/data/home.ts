import { Service } from "@/@types/home";

export const serviceCategories = [
  { id: 1, name: "AC Repair", icon: "❄️", color: "#F6F6F6" },
  { id: 2, name: "Plumbing", icon: "🔧", color: "#F6F6F6" },
  { id: 3, name: "Electrical", icon: "⚡", color: "#F6F6F6" },
  { id: 4, name: "Appliance", icon: "📱", color: "#F6F6F6" },
  { id: 5, name: "Kitchen", icon: "🍳", color: "#F6F6F6" },
  { id: 6, name: "Carpenter", icon: "🔨", color: "#F6F6F6" },
];

export const recommendedServices: Service[] = [
  {
    id: 1,
    title: "Switch Socket Repair",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop",
    rating: 4.8,
    reviewCount: "12.3k",
    price: 49,
  },
  {
    id: 3,
    title: "Tap Repair",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop",
    rating: 4.8,
    reviewCount: "12.3k",
    price: 49,
  },
  {
    id: 4,
    title: "AC Service",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    rating: 4.9,
    reviewCount: "8.5k",
    price: 65,
  },
];
// Sample featured services data
export const featuredServices = [
  {
    id: 1,
    title: "Carpenter Repair",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 2,
    title: "Lawn Mowing",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 3,
    title: "Handyman",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
];

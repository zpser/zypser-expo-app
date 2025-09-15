import { OrderItem, OrderStatus } from "@/@types/order";

export const CURRENT_ORDERS: OrderItem[] = [
  {
    id: "1",
    title: "Tap repair service",
    date: "Jul 28",
    time: "10:00 AM",
    status: OrderStatus.InProgress,
    amount: "$29.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738558.png",
  },
  {
    id: "2",
    title: "AC maintenance",
    date: "Jul 29",
    time: "2:00 PM",
    status: OrderStatus.Scheduled,
    amount: "$85.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738670.png",
  },
  {
    id: "3",
    title: "Plumbing inspection",
    date: "Jul 30",
    time: "9:00 AM",
    status: OrderStatus.InProgress,
    amount: "$40.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738558.png",
  },
];
export const PAST_ORDERS: OrderItem[] = [
  {
    id: "1",
    title: "Kitchen sink repair",
    date: "Jul 20",
    time: "2:00 PM",
    status: OrderStatus.Completed,
    amount: "$45.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738558.png",
  },
  {
    id: "2",
    title: "Electrical wiring",
    date: "Jul 18",
    time: "11:00 AM",
    status: OrderStatus.Completed,
    amount: "$120.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738801.png",
  },
  {
    id: "3",
    title: "Door lock installation",
    date: "Jul 15",
    time: "3:00 PM",
    status: OrderStatus.Completed,
    amount: "$75.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738672.png",
  },
];

export const CANCELED_ORDERS: OrderItem[] = [
  {
    id: "1",
    title: "Garden maintenance",
    date: "Jul 15",
    time: "9:00 AM",
    status: OrderStatus.RefundInitiated,
    amount: "$60.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738671.png",
  },
  {
    id: "2",
    title: "Window cleaning",
    date: "Jul 12",
    time: "1:00 PM",
    status: OrderStatus.RefundCompleted,
    amount: "$35.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738673.png",
  },
  {
    id: "3",
    title: "Carpet cleaning",
    date: "Jul 10",
    time: "10:00 AM",
    status: OrderStatus.RefundInitiated,
    amount: "$90.00",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2738/2738674.png",
  },
];
export const MOCK_ORDER: OrderItem & {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  instructionNote?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  items: Array<{ name: string; price: number }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
} = {
  id: "1",
  title: "AC repair & maintenance",
  date: "Jul 28",
  time: "10:00 AM",
  status: OrderStatus.Scheduled,
  amount: "$329.00",
  iconUrl:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  customerName: "Liam Johnson",
  customerEmail: "liam@acme.com",
  customerPhone: "+1 234 567 890",
  instructionNote:
    "Please kindly call me when you arrive at my location for parking instruction you need to park you vehicle in my slot. Thanks",
  address: "1234 Main St.",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  items: [
    { name: "AC repair service", price: 250.0 },
    { name: "AC filters", price: 49.0 },
  ],
  subtotal: 299.0,
  shipping: 5.0,
  tax: 25.0,
  total: 329.0,
};

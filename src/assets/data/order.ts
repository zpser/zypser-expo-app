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

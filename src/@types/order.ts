import { COLORS } from "@/util/constant/colors";

export enum OrderStatus {
  InProgress = "inProgress",
  Scheduled = "scheduled",
  Completed = "completed",
  RefundInitiated = "refundInitiated",
  RefundCompleted = "refundCompleted",
}

export enum OrderStatusLabel {
  InProgress = "In Progress",
  Scheduled = "Scheduled",
  Completed = "Completed",
  RefundInitiated = "Refund Initiated",
  RefundCompleted = "Refund Completed",
}

export interface OrderItem {
  id: string;
  title: string;
  date: string;
  time: string;
  status: OrderStatus;
  amount: string;
  iconUrl: string;
}

export const STATUS_CONFIG: Record<
  OrderStatus,
  { color: string; label: OrderStatusLabel }
> = {
  [OrderStatus.InProgress]: {
    color: COLORS.inProgress,
    label: OrderStatusLabel.InProgress,
  },
  [OrderStatus.Scheduled]: {
    color: COLORS.scheduled,
    label: OrderStatusLabel.Scheduled,
  },
  [OrderStatus.Completed]: {
    color: COLORS.completed,
    label: OrderStatusLabel.Completed,
  },
  [OrderStatus.RefundInitiated]: {
    color: COLORS.refund,
    label: OrderStatusLabel.RefundInitiated,
  },
  [OrderStatus.RefundCompleted]: {
    color: COLORS.completed,
    label: OrderStatusLabel.RefundCompleted,
  },
};

export enum ItemType {
  Order = "order",
  Divider = "divider",
}

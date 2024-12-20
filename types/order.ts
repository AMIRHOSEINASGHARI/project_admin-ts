// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product";
import { UserType } from "./user";

export type PaymentMethodType = "Paypal" | "Cash On Delivery" | "Credit Card";
export type OrderStatus = "Pending" | "Completed" | "Canceled" | "Refunded";

export type OrderItemType = {
  productId: ProductType;
  quantity: number;
  cost: number;
  discount: number;
  _id: string;
};

export type OrderSummaryType = {
  totalProducts: number;
  totalPrice: number;
  totalDiscount: number;
  totalPayable: number;
};

export interface OrderType extends Document {
  status: OrderStatus;
  deliveryAddress: string;
  userId: UserType;
  phoneNumber: number;
  displayName: string;
  paymentMethod: PaymentMethodType;
  items: OrderItemType[];
  summary: OrderSummaryType;
  createdAt: Date;
}

export type OrdersListParams = {
  search?: string;
  status?: OrderStatus;
  startDate?: string;
  endDate?: string;
};

export type OrdersFilters = {
  search?: string;
  status?: OrderStatus;
  createdAt?: { $gte: Date; $lte: Date };
};

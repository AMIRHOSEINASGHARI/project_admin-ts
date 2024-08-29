// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product";
import { UserType } from "./user";

export type PaymentMethodType = "Paypal" | "Cash On Delivery" | "Credit Card";
export type OrderStatus = "Pending" | "Completed";

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

export type OrderType = Document & {
  status: OrderStatus;
  deliveryAddress: string;
  userId: UserType;
  phoneNumber: number;
  displayName: string;
  paymentMethod: PaymentMethodType;
  items: OrderItemType[];
  summary: OrderSummaryType;
  createdAt: Date;
};

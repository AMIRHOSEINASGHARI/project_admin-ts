// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product";
import { OrderType } from "./order";
import { LikeType } from "./like";
import { CommentType } from "./comment";

export type CheckoutStatus = "pending" | "completed";

export type CartItemType = {
  productId: ProductType;
  quantity?: number;
};

export type CartType = {
  items?: CartItemType[];
  selectedItems?: ProductType[];
  totalProductsCount?: number;
  checkoutStatus?: CheckoutStatus;
};

export interface UserType extends Document {
  username: string;
  displayName?: string;
  password: string;
  avatar?: string;
  phoneNumber?: number;
  address?: string;
  orders?: OrderType[];
  likes?: LikeType[];
  comments?: CommentType[];
  cart?: CartType;
  createdAt: Date;
}

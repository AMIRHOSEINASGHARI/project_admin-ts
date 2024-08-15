// types
import { ProductType } from "./product";
import { OrderType } from "./order";
import { LikeType } from "./like";
import { CommentType } from "./comment";

export type CartItemType = {
  productId: ProductType;
  quantity?: number;
};

export type CartType = {
  items?: CartItemType[];
  selectedItems?: ProductType[];
  totalProductsCount?: number;
  checkoutStatus?: "pending" | "completed";
};

export type UserType = {
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
};

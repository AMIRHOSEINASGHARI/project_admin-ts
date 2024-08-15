// types
import { OrderType } from "./order";
import { LikeType } from "./like";
import { CommentType } from "./comment";
import { AdminType } from "./admin";

export type ProductOrderType = {
  orderId: OrderType;
  quantity?: number;
};

export type ProductType = {
  title: string;
  description?: string;
  image: string;
  price: number;
  stock: number;
  discount?: number;
  category: string;
  keywords?: string[];
  orders?: ProductOrderType[];
  brand: string;
  likes?: LikeType[];
  comments?: CommentType[];
  published?: boolean;
  createdBy?: AdminType;
  createdAt: Date;
};

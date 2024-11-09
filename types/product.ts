// mongoose
import { Document } from "mongoose";
// types
import { OrderType } from "./order";
import { LikeType } from "./like";
import { CommentType } from "./comment";
import { AdminType } from "./admin";

export type ProductOrderType = {
  orderId: OrderType;
  quantity?: number;
};

export interface ProductType extends Document {
  title: string;
  subDescription: string;
  content: string;
  images: string[];
  price: number;
  stock: number;
  discount: number;
  category: string;
  keywords: string[];
  orders: ProductOrderType[];
  brand: string;
  likes: LikeType[];
  comments: CommentType[];
  published: boolean;
  createdBy: AdminType;
  createdAt: Date;
}

export type CreateProduct = {
  title: string;
  subDescription: string;
  content: string;
  brand: string;
  category: string;
  discount: number;
  price: number;
  stock: number;
  images: string[];
  keywords: string[];
  publish: boolean;
};

export type EditProduct = CreateProduct & {
  id: string;
};

export type ProductsFilters = {
  stock?: { $gt: number } | { $gte: number; $lte: number } | number;
  discount?: { $gt: 0 } | number;
  category?: string;
  published?: boolean;
};

export type ProductStock = "in-stock" | "out-of-stock" | "low-stock";
export type ProductDiscount = "has-discount" | "no-discount";
export type ProductPublish = "publish" | "draft";

export type ProductsListParams = {
  search?: string;
  stock?: ProductStock;
  discount?: ProductDiscount;
  published?: ProductPublish;
  category?: string;
  page: string;
};

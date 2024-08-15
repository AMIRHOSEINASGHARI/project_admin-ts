// types
import { ProductType } from "./product";
import { UserType } from "./user";

export type CommentType = {
  title: string;
  description: string;
  productId: ProductType;
  senderId: UserType;
  answer?: string;
  status?: string;
  published?: boolean;
  createdAt: Date;
};

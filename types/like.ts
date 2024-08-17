// mongoose
import { Document } from "mongoose";
// types
import { UserType } from "./user";
import { ProductType } from "./product";
import { BlogType } from "./blog";

export type LikeType = Document & {
  type: "product" | "blog";
  user: UserType;
  product?: ProductType;
  blog?: BlogType;
};

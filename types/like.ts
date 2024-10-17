// mongoose
import { Document } from "mongoose";
// types
import { UserType } from "./user";
import { ProductType } from "./product";
import { BlogType } from "./blog";

export interface LikeType extends Document {
  type: "product" | "blog";
  user: UserType;
  product?: ProductType;
  blog?: BlogType;
}

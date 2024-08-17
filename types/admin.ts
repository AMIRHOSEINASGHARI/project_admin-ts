// mongoose
import { Document } from "mongoose";
// types
import { BlogType } from "./blog";
import { ProductType } from "./product";

export type AdminType = Document & {
  username: string;
  password: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  country?: string;
  avatar?: string;
  roll?: string;
  productsCreated?: ProductType[] | [];
  blogsCreated?: BlogType[] | [];
  createdAt: Date;
};

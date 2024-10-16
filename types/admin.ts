// mongoose
import { Document } from "mongoose";
// types
import { BlogType } from "./blog";
import { ProductType } from "./product";

export type AdminRole = "USER" | "ADMIN" | "OWNER";

export type AdminStatus = "Active" | "Pending" | "Banned" | "Rejected";

export type AdminType = Document & {
  username: string;
  password: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  avatar: string;
  role: AdminRole;
  productsCreated: ProductType[] | [];
  blogsCreated: BlogType[] | [];
  createdAt: Date;
  state: string;
  city: string;
  company: string;
  zipcode: number;
  status: AdminStatus;
  about: string;
  isVerified: boolean;
};

export type CreateUser = {
  username: string;
  password: string;
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  country: string;
  avatar: string;
  role: string;
  state: string;
  city: string;
  company: string;
  zipcode: number;
  isVerified: boolean;
};

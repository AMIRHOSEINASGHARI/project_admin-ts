// mongoose
import { Document } from "mongoose";
// types
import { BlogType } from "./blog";
import { ProductType } from "./product";

export type AdminRole = "OWNER";

export type AdminStatus = "Active" | "Pending" | "Banned" | "Rejected";

export interface AdminType extends Document {
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
}

export type UserFormData = {
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  avatar: string;
  role: string;
  state: string;
  city: string;
  company: string;
  zipcode: number;
  isVerified: boolean;
  about: string;
};

export type UsersListParams = {
  search?: string;
  role?: string;
  status?: string;
};

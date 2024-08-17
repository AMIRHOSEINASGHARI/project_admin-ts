// mongoose
import { Document } from "mongoose";
// types
import { LikeType } from "./like";
import { AdminType } from "./admin";

export type BlogType = Document & {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
  likes?: LikeType[] | [];
  published?: boolean;
  createdBy?: AdminType;
  createdAt: Date;
};

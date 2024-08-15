// types
import { LikeType } from "./like";
import { AdminType } from "./admin";

export type BlogType = {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
  likes?: LikeType[] | [];
  published?: boolean;
  createdBy?: AdminType;
  createdAt: Date;
};

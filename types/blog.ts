// mongoose
import { Document } from "mongoose";
// types
import { LikeType } from "./like";
import { AdminType } from "./admin";

export interface BlogType extends Document {
  title: string;
  description: string;
  content: string;
  cover: string;
  tags: string[];
  likes: LikeType[] | [];
  published: boolean;
  createdBy: AdminType;
  createdAt: Date;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  enableComments: boolean;
}

export type CreateBlog = {
  title: string;
  description: string;
  content: string;
  cover: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  enableComments: boolean;
  published: boolean;
};

export type EditBlog = CreateBlog & {
  id: string;
};

export type BlogsListParams = {
  search?: string;
  status?: "Published" | "Draft";
  sort?: "Latest" | "Oldest";
};

export type BlogsFilters = {
  search?: string;
  published?: boolean;
};

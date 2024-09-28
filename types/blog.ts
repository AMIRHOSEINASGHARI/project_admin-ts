// mongoose
import { Document } from "mongoose";
// types
import { LikeType } from "./like";
import { AdminType } from "./admin";

export type BlogType = Document & {
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
};

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

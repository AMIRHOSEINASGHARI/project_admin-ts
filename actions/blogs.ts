"use server";

// utils
import connectDB from "@/utils/connectDB";
// models
import AdminModel from "@/models/admin";
import BlogModel from "@/models/blog";
// types
import { BlogType } from "@/types/blog";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";

export const getBlogs = async () => {
  try {
    await connectDB();

    const blogs = await BlogModel.find()
      .populate({
        path: "createdBy",
        model: AdminModel,
      })
      .lean<BlogType[]>();

    return {
      blogs,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

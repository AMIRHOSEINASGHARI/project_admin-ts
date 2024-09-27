"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
// models
import AdminModel from "@/models/admin";
import BlogModel from "@/models/blog";
// types
import { BlogType, CreateBlog } from "@/types/blog";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// utils
import { getServerSession } from "@/utils/session";

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

export const createBlog = async (data: CreateBlog) => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      throw new Error(ResponseMessages.UN_AUTHORIZED);
      // return {
      //   message: ResponseMessages.UN_AUTHORIZED,
      //   code: ResponseCodes.UN_AUTHORIZED,
      // };
    }

    const currentUser = await AdminModel.findById(session?.userId);

    if (currentUser?.roll === "USER") {
      throw new Error(ResponseMessages.ACCESS_DENIED);
      // return {
      //   message: ResponseMessages.ACCESS_DENIED,
      //   code: ResponseCodes.UN_AUTHORIZED,
      // };
    }

    const {
      title,
      description,
      content,
      cover,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      enableComments,
      published,
    } = data;

    const newBlog = await BlogModel.create({
      title,
      description,
      content,
      cover,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      enableComments,
      published,
      createdBy: currentUser?._id,
    });

    currentUser?.blogsCreated?.push(newBlog?._id);
    await currentUser.save();

    revalidatePath("/blogs");

    return {
      message: ResponseMessages.SUCCESSFULLY_CREATED,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
    // return {
    //   message: ResponseMessages.SERVER_ERROR,
    //   code: ResponseCodes.SERVER_ERROR,
    // };
  }
};

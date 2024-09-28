"use server";

// next
import { revalidatePath } from "next/cache";
// models
import AdminModel from "@/models/admin";
import BlogModel from "@/models/blog";
// types
import { BlogType, CreateBlog, EditBlog } from "@/types/blog";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// actions
import { checkSession } from "./shared";

export const getBlogs = async () => {
  try {
    await checkSession();

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

export const getBlog = async (id: string) => {
  try {
    await checkSession();

    const blog = await BlogModel.findById(id)
      .populate({
        path: "createdBy",
        model: AdminModel,
        select: "username name avatar",
      })
      .lean<BlogType>();

    return {
      blog,
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
    const currentUser = await checkSession();

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
  }
};

export const editBlog = async (data: EditBlog) => {
  try {
    await checkSession();

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
      id,
    } = data;

    await BlogModel.findByIdAndUpdate(id, {
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
    });

    revalidatePath("/blogs");

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

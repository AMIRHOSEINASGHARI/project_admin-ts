"use server";

// next
import { revalidatePath } from "next/cache";
// models
import AdminModel from "@/models/admin";
import BlogModel from "@/models/blog";
// types
import {
  BlogsFilters,
  BlogsListParams,
  BlogType,
  CreateBlog,
  EditBlog,
} from "@/types/blog";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// actions
import { checkSession } from "./shared";
// utils
import connectDB from "@/utils/connectDB";

export const getBlogs = async (searchParams: BlogsListParams) => {
  try {
    await connectDB();

    const { search, sort, status } = searchParams;

    let query = {};
    let filters: BlogsFilters = {};

    if (search) {
      query = { $text: { $search: search } };
    }
    if (status === "Published") {
      filters.published = true;
    } else if (status === "Draft") {
      filters.published = false;
    }

    const blogs = await BlogModel.find({
      ...query,
      ...filters,
    })
      .populate({
        path: "createdBy",
        model: AdminModel,
      })
      .sort(
        sort === "Latest"
          ? {
              createdAt: -1,
            }
          : {
              createdAt: 1,
            }
      )
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
    await connectDB();

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

    revalidatePath("/blog");

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

    revalidatePath("/blog");

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

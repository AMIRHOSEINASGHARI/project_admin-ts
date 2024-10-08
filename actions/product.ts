"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
import AdminModel from "@/models/admin";
// models
import ProductModel from "@/models/product";
// types
import { CreateProduct, EditProduct, ProductType } from "@/types/product";
// actions
import { checkSession } from "./shared";
// utils
import connectDB from "@/utils/connectDB";

export const getLatestProducts = async () => {
  try {
    await connectDB();

    const products = await ProductModel.find({
      stock: { $gt: 0 },
      published: true,
    })
      .limit(5)
      .sort({ createdAt: -1 })
      .lean<ProductType[]>();

    return {
      products,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    return {
      products: null,
      message: error.message,
      code: ResponseCodes.SERVER_ERROR,
    };
  }
};

export const getProducts = async (searchParams: {
  page?: number;
  search?: string;
  stock?: "in-stock" | "out-of-stock";
  discount?: "has-discount" | "no-discount";
  sort?: number;
  category?: string;
  published?: boolean;
}) => {
  try {
    await connectDB();

    const { page, search, stock, discount, sort, category, published } =
      searchParams;

    let query = {};
    let filters: {
      stock?: { $gt: 0 } | 0;
      discount?: { $gt: 0 } | number;
      category?: string;
      published?: boolean;
    } = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (stock) {
      stock == "in-stock" ? (filters.stock = { $gt: 0 }) : (filters.stock = 0);
    }
    // product discount filter
    if (discount) {
      discount == "has-discount"
        ? (filters.discount = { $gt: 0 })
        : (filters.discount = 0);
    }
    // product category filter
    if (category) {
      filters.category = category;
    }
    // product publish status filter
    if (published) {
      published === true
        ? (filters.published = true)
        : (filters.published = false);
    }

    const pageNumber = page || 1;
    const perPage = 10;
    const totalProductsWithoutFilter = await ProductModel.countDocuments();
    const totalProducts = await ProductModel.countDocuments({
      ...query,
      ...filters,
    });
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await ProductModel.find({ ...filters, ...query })
      .sort({
        ...(sort == 1
          ? { createdAt: -1 }
          : sort == 2
          ? { createdAt: 1 }
          : sort == 3
          ? { price: -1 }
          : sort == 4
          ? { price: 1 }
          : sort == 5
          ? { orders: -1 }
          : {}),
      })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .lean<ProductType[]>();

    return {
      products,
      totalPages,
      totalProducts,
      totalProductsWithoutFilter,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    await connectDB();

    const product = await ProductModel.findById(id)
      .populate({
        path: "createdBy",
        model: AdminModel,
        select: "username name",
      })
      .lean<ProductType>();

    return {
      product,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const createProduct = async (data: CreateProduct) => {
  try {
    const currentUser = await checkSession();

    const {
      title,
      subDescription,
      content,
      images,
      price,
      stock,
      discount,
      category,
      brand,
      keywords,
      publish,
    } = data;

    const newProduct = await ProductModel.create({
      title,
      subDescription,
      content,
      images,
      price: +price,
      stock: +stock,
      discount: +discount,
      category,
      brand,
      keywords,
      published: publish,
      createdBy: currentUser?._id,
    });

    currentUser?.productsCreated?.push(newProduct?._id);
    await currentUser.save();

    revalidatePath("/product");

    return {
      message: ResponseMessages.SUCCESSFULLY_CREATED,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

export const editProduct = async (data: EditProduct) => {
  try {
    await checkSession();

    const {
      id,
      title,
      subDescription,
      content,
      images,
      price,
      stock,
      discount,
      category,
      brand,
      keywords,
      publish,
    } = data;

    await ProductModel.findByIdAndUpdate(id, {
      title,
      subDescription,
      content,
      images,
      price: +price,
      stock: +stock,
      discount: +discount,
      category,
      brand,
      keywords,
      published: publish,
    });

    revalidatePath("/product");

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

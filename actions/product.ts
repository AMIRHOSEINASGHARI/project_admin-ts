"use server";

// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
import AdminModel from "@/models/admin";
// models
import ProductModel from "@/models/product";
// types
import { ProductType } from "@/types/product";
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
    const perPage = 5;
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
      status: "success",
      code: 200,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

"use server";

// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
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

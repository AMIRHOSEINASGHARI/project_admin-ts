"use server";

// types
import { OrdersFilters, OrdersListParams, OrderType } from "@/types/order";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import OrderModel from "@/models/order";
import ProductModel from "@/models/product";
import UserModel from "@/models/user";
// utils
import connectDB from "@/utils/connectDB";
// mongoose
import mongoose from "mongoose";

export const getOrders = async (searchParams: OrdersListParams) => {
  try {
    await connectDB();

    const { search, status, startDate, endDate } = searchParams;

    let query = {};
    let filters: OrdersFilters = {};

    if (search) {
      if (mongoose.Types.ObjectId.isValid(search)) {
        query = { _id: search };
      } else {
        query = { $text: { $search: search } };
      }
    }
    if (status) {
      filters.status = status;
    }
    if (startDate && endDate) {
      filters.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const orders = await OrderModel.find({ ...query, ...filters })
      .populate({
        path: "userId",
        model: UserModel,
      })
      .populate({
        path: "items.productId",
        model: ProductModel,
      })
      .lean<OrderType[]>();

    return {
      orders,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getOrder = async (id: string) => {
  try {
    await connectDB();

    const order = await OrderModel.findById(id)
      .populate({
        path: "userId",
        model: UserModel,
      })
      .populate({
        path: "items.productId",
        model: ProductModel,
      })
      .lean<OrderType>();

    return {
      order,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

"use server";

// types
import { OrderType } from "@/types/order";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import OrderModel from "@/models/order";
import ProductModel from "@/models/product";
import UserModel from "@/models/user";
// actions
import { checkSession } from "./shared";

export const getOrders = async () => {
  try {
    await checkSession();

    const orders = await OrderModel.find()
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
    await checkSession();

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

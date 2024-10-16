"use server";

// enums
import { ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";

export const checkSession = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      throw new Error(ResponseMessages.UN_AUTHORIZED);
    }

    const currentUser = await AdminModel.findById(session?.userId);

    if (currentUser?.role === "USER") {
      throw new Error(ResponseMessages.ACCESS_DENIED);
    }

    return currentUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(`Cannot check user at this time:`, error);
  }
};

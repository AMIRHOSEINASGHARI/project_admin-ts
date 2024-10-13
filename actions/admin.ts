"use server";

// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// types
import { AdminType } from "@/types/admin";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";

const getCurrentAdmin = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    const admin = await AdminModel.findById(session?.userId)
      .select("username name email about city company")
      .lean<AdminType>();

    if (!admin) {
      return {
        admin: null,
        message: ResponseMessages.USER_NOT_FOUND,
        code: ResponseCodes.NOT_FOUND,
      };
    }

    return {
      admin,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(`Cannot get user at this time:`, error);
  }
};

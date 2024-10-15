"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// types
import { AdminType, CreateUser } from "@/types/admin";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
import { hashPassword } from "@/utils/functions";
import { checkSession } from "./shared";

export const getCurrentAdmin = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    const admin = await AdminModel.findById(session?.userId)
      .select("-password")
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

export const getAdmins = async () => {
  try {
    await connectDB();

    const admins = await AdminModel.find()
      .select("-password")
      .lean<AdminType[]>();

    return {
      admins,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const createUser = async (data: CreateUser) => {
  try {
    await checkSession();

    const {
      username,
      password,
      name,
      email,
      phoneNumber,
      address,
      country,
      avatar,
      roll,
      state,
      city,
      company,
      zipcode,
      isVerified,
    } = data;

    const isUsernameExist = await AdminModel.findOne({ username });

    if (isUsernameExist) {
      throw new Error("Username already exist!");
    }

    const hashedPassword = await hashPassword(password);

    await AdminModel.create({
      username,
      password: hashedPassword,
      name,
      email,
      phoneNumber,
      address,
      country,
      avatar,
      roll,
      state,
      city,
      company,
      zipcode,
      isVerified,
    });

    revalidatePath("/user");

    return {
      message: ResponseMessages.SUCCESSFULLY_CREATED,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

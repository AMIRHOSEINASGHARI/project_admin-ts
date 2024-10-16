"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// types
import { AdminType, UserFormData } from "@/types/admin";
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

export const getAdmin = async (id: string) => {
  try {
    await connectDB();

    const admin = await AdminModel.findById(id)
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

export const createUser = async (data: UserFormData) => {
  try {
    await checkSession();

    const { username, password } = data;

    const isUsernameExist = await AdminModel.findOne({ username });

    if (isUsernameExist) {
      throw new Error("Username already exist!");
    }

    const hashedPassword = await hashPassword(password);

    await AdminModel.create({
      ...data,
      password: hashedPassword,
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

export const editUser = async (data: UserFormData) => {
  try {
    const currentUser = await checkSession();

    const { username, password } = data;

    const isUsernameExist = await AdminModel.findOne({ username });

    if (isUsernameExist?._id !== currentUser?._id) {
      throw new Error("Username already exist!");
    }

    const hashedPassword = await hashPassword(password);

    await AdminModel.create({
      ...data,
      password: hashedPassword,
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

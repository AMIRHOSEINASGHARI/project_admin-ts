"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// types
import { AdminStatus, AdminType, UserFormData } from "@/types/admin";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
import { checkSession } from "./shared";
import { sign } from "jsonwebtoken";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
import { cookies } from "next/headers";

export const getCurrentAdmin = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    const admin = await AdminModel.findById(session?.userId)
      .select("-password")
      .lean<AdminType>();

    if (!admin) {
      return {
        admin: undefined,
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

    const admin = await AdminModel.findById(id).lean<AdminType>();

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

    const session = getServerSession();

    const admins = await AdminModel.find({
      _id: { $ne: session?.userId },
    })
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

    const { username } = data;

    const isUsernameExist = await AdminModel.findOne({ username });

    if (isUsernameExist) {
      throw new Error("Username already exist!");
    }

    await AdminModel.create(data);

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

export const editUser = async (data: UserFormData & { userId: string }) => {
  try {
    await connectDB();

    const {
      username,
      name,
      email,
      phoneNumber,
      address,
      country,
      avatar,
      role,
      state,
      city,
      company,
      zipcode,
      isVerified,
      about,
      userId,
    } = data;

    const isUsernameExist = await AdminModel.findOne({ username });

    if (!isUsernameExist?._id.equals(userId)) {
      throw new Error("Username already exist!");
    }

    await AdminModel.findByIdAndUpdate(userId, {
      username,
      name,
      email,
      phoneNumber,
      address,
      country,
      avatar,
      role,
      state,
      city,
      company,
      zipcode,
      isVerified,
      about,
    });

    revalidatePath("/user");

    if (isUsernameExist?.role === "OWNER") {
      // creating token
      const accessToken = sign(
        {
          username,
          userId: isUsernameExist._id,
          name: name,
          avatar: avatar,
          role: isUsernameExist?.role,
        },
        SECRET_KEY!,
        {
          expiresIn: SESSION_EXPIRATION,
        }
      );

      // setting token in cookie
      cookies().set("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + SESSION_EXPIRATION),
        sameSite: "lax",
        path: "/",
      });
    }

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

export const editUserStatus = async (data: {
  userId: string;
  status: AdminStatus;
}) => {
  try {
    await checkSession();

    const { userId, status } = data;

    await AdminModel.findByIdAndUpdate(userId, {
      status,
    });

    revalidatePath("/user");

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await checkSession();

    await AdminModel.findByIdAndDelete(userId);

    revalidatePath("/user");

    return {
      message: ResponseMessages.SUCCESSFULLY_DELETED,
      code: ResponseCodes.SUCCESSFULLY_DELETED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

"use server";

// next
import { cookies } from "next/headers";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
// utils
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/functions";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// jwt
import { sign } from "jsonwebtoken";

export const loginUser = async (formData: FormData) => {
  try {
    await connectDB();

    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;

    if (!username || !password) {
      return {
        message: ResponseMessages.MISSING_CREDENTIALS,
        code: ResponseCodes.BAD_REQUEST,
      };
    }

    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return {
        message: ResponseMessages.USER_NOT_FOUND,
        code: ResponseCodes.NOT_FOUND,
      };
    }

    // verify password
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      return {
        message: ResponseMessages.USER_NOT_FOUND,
        code: ResponseCodes.NOT_FOUND,
      };
    }

    // creating token
    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: admin.name,
        avatar: admin.avatar,
        roll: admin.roll,
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

    return {
      message: ResponseMessages.LOGGED_IN_SUCCESSFULLY,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
"use server";

// next
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    await connectDB();

    const { username, password } = data;

    if (!username || !password) {
      throw new Error(ResponseMessages.MISSING_CREDENTIALS);
    }

    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      throw new Error(ResponseMessages.USER_NOT_FOUND);
    }

    // verify password
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      throw new Error(ResponseMessages.USER_NOT_FOUND);
    }

    // creating token
    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: admin.name,
        avatar: admin.avatar,
        role: admin.role,
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

export const signOut = () => {
  cookies().delete("accessToken");
  redirect("/");
};

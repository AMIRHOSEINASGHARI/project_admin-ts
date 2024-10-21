// next
import { NextResponse } from "next/server";
// models
import AdminModel from "@/models/admin";
// types
import { AdminType } from "@/types/admin";
// utils
import connectDB from "@/utils/connectDB";

export async function GET() {
  try {
    await connectDB();

    const admins = await AdminModel.find()
      .select("-password")
      .lean<AdminType[]>();

    return NextResponse.json(admins, { status: !admins ? 500 : 200 });
  } catch (error: any) {
    console.log(error);
    throw new Error(`Cannot get users at this time:`, error);
  }
}

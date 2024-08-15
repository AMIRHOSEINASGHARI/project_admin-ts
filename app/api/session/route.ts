// next
import { NextResponse } from "next/server";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: ResponseMessages.SERVER_ERROR },
      { status: ResponseCodes.SERVER_ERROR }
    );
  }

  try {
    const session = getServerSession();

    if (!session) {
      return NextResponse.json(
        { msg: ResponseMessages.UN_AUTHORIZED },
        { status: ResponseCodes.UN_AUTHORIZED }
      );
    }

    return NextResponse.json(
      { msg: ResponseMessages.SUCCESSFULLY_FETCHED, session },
      { status: ResponseCodes.SUCCESSFULLY_FETCHED }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: ResponseMessages.SERVER_ERROR },
      { status: ResponseCodes.SERVER_ERROR }
    );
  }
}

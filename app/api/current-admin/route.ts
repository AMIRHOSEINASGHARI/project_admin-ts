// next
import { NextResponse } from "next/server";
// actions
import { getCurrentAdmin } from "@/actions/admin";

export async function GET() {
  try {
    const data = await getCurrentAdmin();

    return NextResponse.json(data, { status: data?.code });
  } catch (error: any) {
    console.log(error);
    throw new Error(`Cannot get user at this time:`, error);
  }
}

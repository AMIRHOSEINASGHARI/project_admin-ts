"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import TourModel from "@/models/tour";
// types
import { CreateTour, TourType } from "@/types/tour";
// actions
import { checkSession } from "./shared";
// utils
import connectDB from "@/utils/connectDB";

export const createTour = async (data: CreateTour) => {
  try {
    await checkSession();

    await TourModel.create(data);

    revalidatePath("/tour");

    return {
      message: ResponseMessages.SUCCESSFULLY_CREATED,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

export const getTours = async () => {
  try {
    await connectDB();

    const tours = await TourModel.find().lean<TourType[]>();

    return {
      tours,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

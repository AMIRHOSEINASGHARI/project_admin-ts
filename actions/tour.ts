"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import TourModel from "@/models/tour";
import AdminModel from "@/models/admin";
// types
import { CreateTour, EditTour, ToursListParams, TourType } from "@/types/tour";
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

export const editTour = async (data: EditTour) => {
  try {
    await checkSession();

    const {
      id,
      name,
      content,
      images,
      tourGuide,
      startDate,
      endDate,
      duration,
      destination,
      services,
      tags,
      published,
      price,
      discount,
    } = data;

    await TourModel.findByIdAndUpdate(id, {
      name,
      content,
      images,
      tourGuide,
      startDate,
      endDate,
      duration,
      destination,
      services,
      tags,
      published,
      price,
      discount,
    });

    revalidatePath("/tour");

    return {
      message: ResponseMessages.SUCCESSFULLY_UPDATED,
      code: ResponseCodes.SUCCESSFULLY_UPDATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

export const getTours = async (searchParams: ToursListParams) => {
  try {
    await connectDB();

    const { search } = searchParams;

    let query = {};

    if (search) {
      query = { $text: { $search: search } };
    }

    const tours = await TourModel.find({ ...query }).lean<TourType[]>();

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

export const getTour = async (id: string) => {
  try {
    await connectDB();

    const tour = await TourModel.findById(id)
      .populate({
        path: "tourGuide",
        model: AdminModel,
        select: "name phoneNumber",
      })
      .lean<TourType>();

    return {
      tour,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

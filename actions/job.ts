"use server";

// next
import { revalidatePath } from "next/cache";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import JobModel from "@/models/jog";
// types
import { CreateJob, JobType } from "@/types/job";
// actions
import { checkSession } from "./shared";
// utils
import connectDB from "@/utils/connectDB";

export const getAdmins = async () => {
  try {
    await connectDB();

    const jobs = await JobModel.find().lean<JobType[]>();

    return {
      jobs,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const createJob = async (data: CreateJob) => {
  try {
    await checkSession();

    const {
      employmentType,
      experience,
      role,
      skills,
      workingSchedule,
      locations,
      expired,
      salary,
      price,
      address,
      company,
      phoneNumber,
      image,
      benefits,
      published,
      title,
      content,
    } = data;

    const modelInput = {
      title,
      content,
      properties: {
        employmentType,
        experience,
        role,
        skills,
        workingSchedule,
        locations,
        expired,
        salary,
        price: +price,
        address,
        company,
        phoneNumber,
        image,
        benefits,
        published,
      },
    };

    await JobModel.create(modelInput);

    revalidatePath("/job");

    return {
      message: ResponseMessages.SUCCESSFULLY_CREATED,
      code: ResponseCodes.SUCCESSFULLY_CREATED,
    };
  } catch (error) {
    console.log(error);
    throw new Error(ResponseMessages.SERVER_ERROR);
  }
};

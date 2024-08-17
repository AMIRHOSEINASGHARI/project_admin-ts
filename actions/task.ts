"use server";

// utils
import connectDB from "@/utils/connectDB";
// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
import TaskModel from "@/models/task";
import { TaskType } from "@/types/task";

export const upcommingEvents = async () => {
  try {
    await connectDB();

    const tasks = await TaskModel.find()
      .populate({
        path: "createdBy",
        model: AdminModel,
        select: "username name avatar roll",
      })
      .sort({ createdAt: -1 })
      .lean<TaskType[]>();

    return {
      tasks: tasks?.splice(0, 5),
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    return {
      tasks: null,
      message: error.message,
      code: ResponseCodes.SERVER_ERROR,
    };
  }
};

"use server";

// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// models
import AdminModel from "@/models/admin";
import TaskModel from "@/models/task";
// types
import { TaskType } from "@/types/task";
// actions
import { checkSession } from "./shared";

export const upcommingEvents = async () => {
  try {
    await checkSession();

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

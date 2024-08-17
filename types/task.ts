// mongoose
import { Document } from "mongoose";
// types
import { AdminType } from "./admin";

export type TaskStatusType = "Progress" | "Done" | "Todo";

export type TaskType = Document & {
  title: string;
  description?: string;
  status?: TaskStatusType;
  createdBy?: AdminType;
  dueDate: Date;
  createdAt: Date;
};

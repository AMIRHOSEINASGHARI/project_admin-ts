// mongoose
import { Document } from "mongoose";
// types
import { AdminType } from "./admin";

export type TaskStatusType = "Progress" | "Done" | "Todo";

export interface TaskType extends Document {
  title: string;
  description?: string;
  status?: TaskStatusType;
  createdBy?: AdminType;
  dueDate: Date;
  createdAt: Date;
}

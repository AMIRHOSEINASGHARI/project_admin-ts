// types
import { AdminType } from "./admin";

export type TaskStatusType = "Progress" | "Done" | "Todo";

export type TaskType = {
  title: string;
  description?: string;
  status?: TaskStatusType;
  createdBy?: AdminType;
  dueDate: Date;
  createdAt: Date;
};

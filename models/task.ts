import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  status: { type: String, default: "todo" },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
  dueDate: { type: Date, required: true, default: () => Date.now() },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const TaskModel = models?.Task || model("Task", taskSchema);

export default TaskModel;

import { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  properties: {
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "On demand", "Negotiable"],
      required: true,
      default: "Full-time",
    },
    experience: {
      type: String,
      enum: ["No experience", "1 year exp", "2 year exp", "> 3 year exp"],
      required: true,
      default: "No experience",
    },
    role: { type: String, required: true },
    skills: { type: [String], default: [], required: true },
    workingSchedule: { type: [String], default: [], required: true },
    locations: { type: [String], default: [], required: true },
    expired: {
      type: Date,
      required: true,
      default: () => Date.now(),
    },
    salary: {
      type: String,
      enum: ["Hourly", "Custom"],
      required: true,
      default: "Hourly",
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    benefits: {
      type: [String],
      required: true,
      default: ["Free parking"],
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const JobModel = models?.Job || model("Job", jobSchema);

export default JobModel;

import { Document } from "mongoose";

export type JobEmployment =
  | "Full-time"
  | "Part-time"
  | "On demand"
  | "Negotiable";

export type JobExperience =
  | "No experience"
  | "1 year exp"
  | "2 year exp"
  | "> 3 year exp";

export type JobSalary = "Hourly" | "Custom";

export interface JobProperties {
  employmentType: JobEmployment;
  experience: JobExperience;
  role: string;
  skills: string[];
  workingSchedule: string[];
  locations: string[];
  expired: Date;
  salary: JobSalary;
  price: number;
  address: string;
  company: string;
  phoneNumber: string;
  image: string;
  benefits: string[];
  published: boolean;
}

export interface JobType extends Document {
  title: string;
  content: string;
  properties: JobProperties;
  createdAt: Date;
}

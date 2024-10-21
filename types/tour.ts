// mongoose
import { Document } from "mongoose";
// types
import { AdminType } from "./admin";

export interface TourType extends Document {
  name: string;
  content: string;
  images: string[];
  tourGuide: AdminType;
  startDate: Date;
  endDate: Date;
  duration: string;
  destination: string;
  services: string[];
  tags: string[];
  published: boolean;
  price: number;
  discount: number;
  createdAt: Date;
}

export type CreateTour = {
  name: string;
  content: string;
  images: string[];
  tourGuide: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  destination: string;
  services: string[];
  tags: string[];
  published: boolean;
  price: number;
  discount: number;
};

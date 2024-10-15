import { z } from "zod";

export const authFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be between 4 and 10 characters" })
    .max(20, { message: "َUsername must be between 4 and 10 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be between 4 and 10 characters" })
    .max(10, { message: "Password must be between 4 and 10 characters" }),
});

export const productFormSchema = z.object({
  title: z
    .string()
    .min(20, "Product title must be between 20 and 30 characters!")
    .max(30, "Product title must be between 20 and 30 characters!"),
  subDescription: z
    .string()
    .min(100, "Sub description must be between 100 and 150 characters!")
    .max(150, "Sub description must be between 100 and 150 characters!"),
  content: z.string().min(1, "Content is required!"),
  images: z
    .array(z.string().url("Must be a valid image URL!"))
    .min(2, "At least two images is required"),
  price: z
    .union([
      z.number().min(0, "Invalid price format! Minimum value is 0$"),
      z
        .string()
        .regex(
          /^\d+(\.\d{1,2})?$/,
          "Invalid price format! Minimum value is 0$"
        ),
    ])
    .refine(
      (value) =>
        typeof value === "number" ? value >= 1 : parseFloat(value) >= 1,
      {
        message: "Price should not be $0.00!",
      }
    ),
  stock: z
    .union([
      z.number().min(0, "Invalid stock format! Minimum value is 0"),
      z
        .string()
        .regex(/^\d+(\.\d{1,2})?$/, "Invalid stock format! Minimum value is 0"),
    ])
    .refine(
      (value) =>
        typeof value === "number" ? value >= 0 : parseFloat(value) >= 0,
      {
        message: "Stock is required!",
      }
    ),
  discount: z
    .union([
      z.number().min(0, "Invalid discount format! Minimum value is 0%"),
      z
        .string()
        .regex(
          /^\d+(\.\d{1,2})?$/,
          "Invalid discount format! Minimum value is 0%"
        ),
    ])
    .refine(
      (value) =>
        typeof value === "number" ? value >= 0 : parseFloat(value) >= 0,
      {
        message: "Discount is required!",
      }
    ),
  category: z.string().min(1, "Category is required!"),
  brand: z.string().min(1, "Brand name is required!"),
  publish: z.boolean(),
  keywords: z
    .array(z.string().min(1, "Too short!"))
    .min(2, "Must have at least 2 items!"),
});

export const blogFormSchema = z.object({
  title: z
    .string()
    .min(50, "Blog title must be between 50 and 100 characters!")
    .max(100, "Blog title must be between 50 and 100 characters!"),
  description: z
    .string()
    .min(200, "Description must be between 200 and 250 characters!")
    .max(250, "Description must be between 200 and 250 characters!"),
  content: z.string().min(1, "Content is required!"),
  cover: z
    .string()
    .url("Must be a valid image URL!")
    .min(1, "One cover is required"),
  tags: z
    .array(z.string().min(1, "Too short!"))
    .min(2, "Must have at least 2 items!"),
  metaTitle: z.string().min(1, "Meta title is required!"),
  metaDescription: z.string().min(1, "Meta description is required!"),
  metaKeywords: z
    .array(z.string().min(1, "Too short!"))
    .min(2, "Must have at least 2 items!"),
  enableComments: z.boolean(),
  published: z.boolean(),
});

export const blogAddCommentFormSchema = z.object({
  text: z.string().min(1, { message: "Comment is requiered!" }),
});

export const userFormSchema = z.object({
  username: z.string().min(1, { message: "Username is requiered!" }),
  password: z.string().min(1, { message: "Password is requiered!" }),
  name: z.string().min(1, { message: "Name is requiered!" }),
  email: z.string().min(1, { message: "Email is requiered!" }),
  phoneNumber: z.string().min(1, { message: "Phone number is requiered!" }),
  address: z.string().min(1, { message: "Address is requiered!" }),
  country: z.string().min(1, { message: "Country is requiered!" }),
  avatar: z
    .string()
    .url("Must be a valid image URL!")
    .min(1, "Avatar is required"),
  roll: z.string().min(1, { message: "Roll is requiered!" }),
  state: z.string().min(1, { message: "State is requiered!" }),
  city: z.string().min(1, { message: "City is requiered!" }),
  company: z.string().min(1, { message: "Company is requiered!" }),
  zipcode: z
    .union([
      z.number().min(1, "Invalid zipcode format! Minimum value is 1"),
      z
        .string()
        .regex(
          /^\d+(\.\d{1,2})?$/,
          "Invalid zipcode format! Minimum value is 1"
        ),
    ])
    .refine(
      (value) =>
        typeof value === "number" ? value >= 0 : parseFloat(value) >= 0,
      {
        message: "Zipcode is required!",
      }
    ),
  // status: z.string().min(1, { message: "Status is requiered!" }),
  isVerified: z.boolean(),
});

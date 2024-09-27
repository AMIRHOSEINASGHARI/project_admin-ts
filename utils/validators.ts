import { z } from "zod";

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
    .array(
      z.union([
        z.string().url("Must be a valid image URL!"), // For existing images (URLs)
        z.instanceof(File), // For newly uploaded files
      ])
    )
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

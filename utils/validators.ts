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
  images: z
    .array(
      z.union([
        z.string().url("Must be a valid image URL!"), // For existing images (URLs)
        z.instanceof(File), // For newly uploaded files
      ])
    )
    .min(2, "At least two images are required")
    .max(10, "Maximum number of images is 10!"),
  price: z
    .union([
      z.number().min(0, "Invalid price!"),
      z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format!"),
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
      z.number().min(0, "Invalid stock!"),
      z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid stock format!"),
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
      z.number().min(0, "Invalid discount!"),
      z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid discount format!"),
    ])
    .refine((value) =>
      typeof value === "number" ? value >= 0 : parseFloat(value) >= 0
    )
    .optional(),
  category: z.string().min(1, "Category is required!"),
  brand: z.string().min(1, "Brand name is required!"),
  publish: z.boolean(),
});

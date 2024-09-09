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
  content: z
    .string()
    .min(100, "Content must be between 100 and 150 characters!"),
  images: z.array(z.string()).min(1, "Image is required!"),
  price: z.number().min(1, "Price should not be $0.00!"),
  stock: z.number().min(0, "Stock is required!"),
  discount: z.number(),
  category: z.string().min(1, "Category is required!"),
  brand: z.string().min(1, "Brand name is required!"),
});

"use client";

// react
import { useState } from "react";
// types
import { ProductType } from "@/types/product";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// constants
import { productCategory } from "@/constants";
// utils
import { productFormSchema } from "@/utils/validators";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import View from "./layout/View";
import ProductFileUploader from "./ProductFileUploader";

type ProductFormProps = {
  page: "add" | "edit";
  product?: ProductType;
};

const ProductForm = ({ page, product }: ProductFormProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const formDefaultValues = {
    title: product?.title || "",
    subDescription: "", // TODO: change the product model: add subDescription field
    content: product?.description || "", // TODO: change the product model: change description field to content
    images: [],
    price: product?.price || 0,
    stock: product?.stock || 0,
    discount: product?.discount || 0,
    category: product?.category || "",
    brand: product?.brand || "",
  };

  // Define form.
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: formDefaultValues,
  });

  // Define submit handler.
  const onSubmit = (values: z.infer<typeof productFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <View
          orientation="vertical"
          className="max-w-[880px] mx-auto space-y-14"
        >
          <Card
            style={{
              padding: 0,
            }}
          >
            <CardHeader className="p-card border-b border-dashed border-border-light dark:border-border-dark">
              <CardTitle>Details</CardTitle>
              <CardDescription>
                Title, short description, image...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card space-y-10">
              <CardContent className="space-y-5">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Product title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Sub description" rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardContent className="space-y-5">
                <h1 className="bold-value-3">Content</h1>
                <p className="text-red-500 bg-red-200">
                  RICH TEXT EDITOR comes here
                </p>
                {/* // TODO: rich text editor component */}
              </CardContent>
              <CardContent className="space-y-5">
                <h1 className="bold-value-3">Images</h1>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ProductFileUploader
                          onFieldChange={field.onChange}
                          files={files}
                          setFiles={setFiles}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </div>
          </Card>
          <Card
            style={{
              padding: 0,
            }}
          >
            <CardHeader className="p-card border-b border-dashed border-border-light dark:border-border-dark">
              <CardTitle>Properties</CardTitle>
              <CardDescription>
                Additional functions and attributes...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card space-y-10">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <Input type="number" placeholder="Price" />
                <Input type="number" placeholder="Stock" />
                <Input type="number" placeholder="Discount" />
                <Select>
                  <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategory.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        <div className="flex items-center gap-2">
                          <div className="text-xl text-icon-light dark:text-icon-dark">
                            {item.icon}
                          </div>
                          <span>{item.title}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Brand name"
                  className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2"
                />
                {/* // TODO: keyword selection component */}
                <p className="text-red-500 bg-red-200">KEYWORDS comes here</p>
              </CardContent>
            </div>
          </Card>
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <Switch
                id="publish"
                className="data-[state=checked]:bg-primary-1 dark:data-[state=checked]:bg-primary-1 dark:data-[state=unchecked]:bg-slate-700"
                thumbClassName="dark:data-[state=checked]:bg-white dark:bg-white"
              />
              <Label htmlFor="publish" className="cursor-pointer">
                Publish
              </Label>
            </div>
            <Button type="submit" variant="secondary" className="font-bold">
              {page === "add" ? "Create product" : "Edit Product"}
            </Button>
          </div>
        </View>
      </form>
    </Form>
  );
};

export default ProductForm;

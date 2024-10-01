"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// types
import { ProductType } from "@/types/product";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// constants
import { productCategory } from "@/constants";
// actions
import { createProduct, editProduct } from "@/actions/product";
// react query
import { useMutation } from "@tanstack/react-query";
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
import toast from "react-hot-toast";
import clsx from "clsx";
import Editor from "../editor/Editor";
import FormKeywords from "./FormKeywords";
import Loader from "./Loader";
import ProductFileUploader from "../pages/management/product/create/ui/ProductFileUploader";

type ProductFormProps = {
  page: "add" | "edit";
  product?: ProductType;
};

const ProductForm = ({ page, product }: ProductFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>(product?.images || []);
  const router = useRouter();
  const { isLoading: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: createProduct,
  });
  const { isLoading: isEditing, mutate: mutateEdit } = useMutation({
    mutationFn: editProduct,
  });

  const formDefaultValues = {
    title: product ? product?.title : "",
    subDescription: product ? product?.subDescription : "",
    content: product ? product?.content : "",
    images: product ? product?.images : images,
    price: product ? product?.price : "",
    stock: product ? product?.stock : "",
    discount: product ? product?.discount : "",
    category: product ? product?.category : "",
    brand: product ? product?.brand : "",
    publish: product ? product?.published : true,
    keywords: product ? product?.keywords : [],
  };

  // Define form.
  const form = useForm<z.infer<typeof productFormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(productFormSchema),
    defaultValues: formDefaultValues,
  });

  // Define submit handler.
  const onSubmit = async (values: z.infer<typeof productFormSchema>) => {
    if (!!values.images.find((item) => typeof item !== "string")) {
      toast.error("Upload your files first!");
      return;
    }

    const formData = {
      ...values,
      discount: +values.discount,
      price: +values.price,
      stock: +values.stock,
    };

    if (page === "add") {
      mutateCreate(formData, {
        onSuccess: (data) => {
          toast.success(data?.message);
          router.push("/product/list");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });

      return;
    }

    if (page === "edit") {
      mutateEdit(
        {
          ...formData,
          id: product?._id,
        },
        {
          onSuccess: (data) => {
            toast.success(data?.message);
            router.push(`/product/${product?._id}`);
          },
          onError: (error: any) => {
            toast.error(error.message);
          },
        }
      );
    }
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
                        <Input
                          {...field}
                          placeholder="Product title"
                          maxLength={30}
                        />
                      </FormControl>
                      <FormMessage />
                      <span
                        className={clsx("text-small ml-[14px]", {
                          "text-[var(--text-disabled)]":
                            field?.value?.length < 20,
                          "text-green-500": field?.value?.length >= 20,
                        })}
                      >
                        {field?.value?.length} of 30
                      </span>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Sub description"
                          rows={5}
                          maxLength={150}
                        />
                      </FormControl>
                      <FormMessage />
                      <span
                        className={clsx("text-small ml-[14px]", {
                          "text-[var(--text-disabled)]":
                            field?.value?.length < 100,
                          "text-green-500": field?.value?.length >= 100,
                        })}
                      >
                        {field?.value?.length} of 150
                      </span>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardContent className="flex flex-col gap-5">
                <h1 className="bold-value-3">Content</h1>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Editor
                          content={field.value}
                          onFieldChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                          images={images}
                          setImages={setImages}
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
                Pricing and Additional functions and attributes...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card space-y-10">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Price"
                          className="h-fit"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Stock"
                          className="h-fit"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          max={100}
                          placeholder="Discount"
                          className="h-fit"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Brand name"
                          className="h-fit"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                      <FormControl>
                        <FormKeywords
                          keywords={field.value}
                          onFieldChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </div>
          </Card>
          <div className="flex justify-between items-center flex-wrap gap-3">
            <FormField
              control={form.control}
              name="publish"
              render={({ field }) => (
                <FormItem className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                  <FormControl>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="publish"
                        className="data-[state=checked]:bg-primary-1 dark:data-[state=checked]:bg-primary-1 dark:data-[state=unchecked]:bg-slate-700"
                        thumbClassName="dark:data-[state=checked]:bg-white dark:bg-white"
                      />
                      <Label htmlFor="publish" className="cursor-pointer">
                        Publish
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="font-bold min-w-[134px]"
              disabled={isCreating || isEditing}
            >
              {isCreating || isEditing ? (
                <Loader />
              ) : page === "add" ? (
                "Create product"
              ) : (
                "Edit Product"
              )}
            </Button>
          </div>
        </View>
      </form>
    </Form>
  );
};

export default ProductForm;

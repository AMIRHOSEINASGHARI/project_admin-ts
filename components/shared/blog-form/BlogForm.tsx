"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// react query
import { useMutation } from "@tanstack/react-query";
// actions
import { createBlog, editBlog } from "@/actions/blogs";
// types
import { BlogType, EditBlog } from "@/types/blog";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// utils
import { blogFormSchema } from "@/utils/validators";
// cmp
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Editor from "@/components/editor/Editor";
import View from "../layout/View";
import toast from "react-hot-toast";
import clsx from "clsx";
import Loader from "../Loader";
import BlogFileUploader from "./ui/BlogFileUploader";
import FormKeywords from "../FormKeywords";

type BlogFormProps = {
  page: "add" | "edit";
  blog?: BlogType;
};

const BlogForm = ({ page, blog }: BlogFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [cover, setCover] = useState<string>(blog?.cover || "");
  const router = useRouter();
  const { isLoading: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: createBlog,
  });
  const { isLoading: isEditing, mutate: mutateEdit } = useMutation({
    mutationFn: editBlog,
  });

  const formDefaultValues = {
    title: blog ? blog?.title : "",
    description: blog ? blog?.description : "",
    content: blog ? blog?.content : "",
    cover: blog ? blog?.cover : "",
    tags: blog ? blog?.tags : [],
    metaTitle: blog ? blog?.metaTitle : "",
    metaDescription: blog ? blog?.metaDescription : "",
    metaKeywords: blog ? blog?.metaKeywords : [],
    enableComments: blog ? blog?.enableComments : true,
    published: blog ? blog?.published : true,
  };

  // Define form.
  const form = useForm<z.infer<typeof blogFormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(blogFormSchema),
    defaultValues: formDefaultValues,
  });

  // Define submit handler.
  const onSubmit = async (values: z.infer<typeof blogFormSchema>) => {
    if (typeof values.cover !== "string") {
      toast.error("Upload your cover first!");
      return;
    }

    if (page === "add") {
      // mutateCreate(values, {
      //   onSuccess: (data) => {
      //     toast.success(data?.message);
      //     router.push("/blog/list");
      //   },
      //   onError: (error: any) => {
      //     toast.error(error.message);
      //   },
      // });

      return;
    }

    if (page === "edit") {
      // mutateEdit(
      //   {
      //     ...values,
      //     id: blog?._id,
      //   },
      //   {
      //     onSuccess: (data) => {
      //       toast.success(data?.message);
      //       router.push(`/blog/${blog?._id}`);
      //     },
      //     onError: (error: any) => {
      //       toast.error(error.message);
      //     },
      //   }
      // );
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
                          placeholder="Blog title"
                          maxLength={100}
                        />
                      </FormControl>
                      <FormMessage />
                      <span
                        className={clsx("text-small ml-[14px]", {
                          "text-[var(--text-disabled)]":
                            field?.value?.length < 50,
                          "text-green-500": field?.value?.length >= 50,
                        })}
                      >
                        {field?.value?.length} of 100
                      </span>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Description"
                          rows={5}
                          maxLength={250}
                        />
                      </FormControl>
                      <FormMessage />
                      <span
                        className={clsx("text-small ml-[14px]", {
                          "text-[var(--text-disabled)]":
                            field?.value?.length < 200,
                          "text-green-500": field?.value?.length >= 200,
                        })}
                      >
                        {field?.value?.length} of 250
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
                <h1 className="bold-value-3">Cover</h1>
                <FormField
                  control={form.control}
                  name="cover"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <BlogFileUploader
                          cover={cover}
                          setCover={setCover}
                          files={files}
                          setFiles={setFiles}
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
            <div className="px-card pb-card">
              <CardContent className="space-y-5">
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                      <FormControl>
                        <FormKeywords
                          keywords={field.value}
                          onFieldChange={field.onChange}
                          placeholder="+ Tags"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="metaTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Meta title"
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
                  name="metaDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Meta description"
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
                  name="metaKeywords"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                      <FormControl>
                        <FormKeywords
                          keywords={field.value}
                          onFieldChange={field.onChange}
                          placeholder="+ Meta keywords"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="enableComments"
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
                            Enable comments
                          </Label>
                        </div>
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
              name="published"
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
                "Create blog"
              ) : (
                "Edit blog"
              )}
            </Button>
          </div>
        </View>
      </form>
    </Form>
  );
};

export default BlogForm;

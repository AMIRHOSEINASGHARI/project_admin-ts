"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// react query
import { useMutation } from "@tanstack/react-query";
// actions
// types
import { JobType } from "@/types/job";
import { JobFormProps } from "@/types/components";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// utils
import { jobFormSchema } from "@/utils/validators";
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
import FormKeywords from "../FormKeywords";
import JobFileUploader from "./ui/JobFileUploader";

const JobForm = ({ type, job }: JobFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>(job?.properties?.image || "");
  const router = useRouter();

  const formDefaultValues = {
    title: job ? job?.title : "",
    content: job ? job?.content : "",
    employmentType: job ? job?.properties?.employmentType : "",
    experience: job ? job?.properties?.experience : "",
    role: job ? job?.properties?.role : "",
    skills: job ? job?.properties?.skills : [""],
    workingSchedule: job ? job?.properties?.workingSchedule : [""],
    locations: job ? job?.properties?.locations : [""],
    expired: job ? job?.properties?.expired : new Date(),
    salary: job ? job?.properties?.salary : "",
    price: job ? job?.properties?.price : "",
    address: job ? job?.properties?.address : "",
    company: job ? job?.properties?.company : "",
    phoneNumber: job ? job?.properties?.phoneNumber : "",
    image: job ? job?.properties?.image : "",
    benefits: job ? job?.properties?.benefits : [""],
    published: job ? job?.properties?.published : true,
  };

  // Define form.
  const form = useForm<z.infer<typeof jobFormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(jobFormSchema),
    defaultValues: formDefaultValues,
  });

  // Define submit handler.
  const onSubmit = async (values: z.infer<typeof jobFormSchema>) => {
    if (typeof values.image !== "string") {
      toast.error("Upload your image first!");
      return;
    }

    if (type === "create") {
    }

    if (type === "edit") {
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
              <CardDescription>Title, content and image...</CardDescription>
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
                          placeholder="Job title"
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
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <JobFileUploader
                          image={image}
                          setImage={setImage}
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
                Additional functions and attributes...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card">
              <CardContent className="space-y-5"></CardContent>
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
              //   disabled={isCreating || isEditing}
            >
              {false ? (
                <Loader />
              ) : type === "create" ? (
                "Create job"
              ) : (
                "Edit job"
              )}
            </Button>
          </div>
        </View>
      </form>
    </Form>
  );
};

export default JobForm;

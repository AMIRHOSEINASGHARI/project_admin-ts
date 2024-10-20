"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// react query
import { useMutation } from "@tanstack/react-query";
// actions
import { createJob, editJob } from "@/actions/job";
// types
import { JobSalary } from "@/types/job";
import { JobFormProps } from "@/types/components";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// utils
import { jobFormSchema } from "@/utils/validators";
import { cn } from "@/lib/utils";
// constants
import { jobBenefits } from "@/constants";
// icons
import {
  SolarCalendarBoldDuotone,
  SolarClockCircleBoldDuotone,
  SolarSalary,
} from "@/components/svg";
// cmp
import { format } from "date-fns";
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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Editor from "@/components/editor/Editor";
import View from "../layout/View";
import toast from "react-hot-toast";
import clsx from "clsx";
import Loader from "../Loader";
import FormKeywords from "../FormKeywords";
import JobFileUploader from "./ui/JobFileUploader";

const JobForm = ({ type, job }: JobFormProps) => {
  const [expired, setExpired] = useState<Date | undefined>(
    job ? new Date(job?.properties?.expired) : undefined
  );
  const [salary, setSalary] = useState<JobSalary>(
    job ? job?.properties?.salary : "Hourly"
  );
  const [files, setFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>(job?.properties?.image || "");
  const router = useRouter();
  const { isLoading: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: createJob,
  });
  const { isLoading: isEditing, mutate: mutateEdit } = useMutation({
    mutationFn: editJob,
  });

  const formDefaultValues = {
    title: job ? job?.title : "",
    content: job ? job?.content : "",
    employmentType: job ? job?.properties?.employmentType : "Full-time",
    experience: job ? job?.properties?.experience : "1 year exp",
    role: job ? job?.properties?.role : "",
    skills: job ? job?.properties?.skills : [],
    workingSchedule: job ? job?.properties?.workingSchedule : [],
    locations: job ? job?.properties?.locations : [],
    expired,
    salary,
    price: job ? job?.properties?.price : "",
    address: job ? job?.properties?.address : "",
    company: job ? job?.properties?.company : "",
    phoneNumber: job ? job?.properties?.phoneNumber : "",
    image: job ? job?.properties?.image : "",
    benefits: job ? job?.properties?.benefits : [],
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

    const formData = {
      ...values,
      price: +values.price,
    };

    if (type === "create") {
      mutateCreate(formData, {
        onSuccess: (data) => {
          toast.success(data?.message);
          router.push("/job/list");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });

      return;
    }

    if (type === "edit") {
      mutateEdit(
        { ...formData, id: job?._id },
        {
          onSuccess: (data) => {
            toast.success(data?.message);
            router.push(`/job/${job?._id}`);
          },
          onError: (error: any) => {
            toast.error(error.message);
          },
        }
      );
    }
  };

  console.log(job);

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
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h1 className="bold-value-3">Title</h1>
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
                </div>
                <div className="space-y-4">
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
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Image</h1>
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
                </div>
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
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h1 className="bold-value-3">Employment type</h1>
                  <FormField
                    control={form.control}
                    name="employmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            defaultValue="Full-time"
                            className="flex items-center flex-wrap gap-7"
                            onValueChange={(e) => field.onChange(e)}
                          >
                            {[
                              "Full-time",
                              "Part-time",
                              "On demand",
                              "Negotiable",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item}>{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Experience</h1>
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            defaultValue="1 year exp"
                            className="flex items-center flex-wrap gap-7"
                            onValueChange={(e) => field.onChange(e)}
                          >
                            {[
                              "No experience",
                              "1 year exp",
                              "2 year exp",
                              "> 3 year exp",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item}>{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Role</h1>
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Role" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Skills</h1>
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <FormControl>
                          <FormKeywords
                            keywords={field.value}
                            onFieldChange={field.onChange}
                            placeholder="+ Skills"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Working schedule</h1>
                  <FormField
                    control={form.control}
                    name="workingSchedule"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <FormControl>
                          <FormKeywords
                            keywords={field.value}
                            onFieldChange={field.onChange}
                            placeholder="+ Schedule"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Locations</h1>
                  <FormField
                    control={form.control}
                    name="locations"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <FormControl>
                          <FormKeywords
                            keywords={field.value}
                            onFieldChange={field.onChange}
                            placeholder="+ Locations"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Expired</h1>
                  <FormField
                    control={form.control}
                    name="expired"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent flex items-center justify-between py-[16px] px-[14px] rounded-md border border-slate-200 dark:border-slate-700",
                                  !expired && "text-muted-foreground"
                                )}
                              >
                                {expired ? (
                                  format(expired, "MM/dd/yyyy")
                                ) : (
                                  <span className="text-slate-500 text-small font-light">
                                    Start date
                                  </span>
                                )}
                                <SolarCalendarBoldDuotone className="icon" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto" side="bottom">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date) => {
                                  setExpired(date);
                                  field.onChange(date);
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Salary</h1>
                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <FormControl>
                          <div className="grid grid-cols-2 gap-5 h-[100px]">
                            <Button
                              type="button"
                              variant="outline"
                              className={clsx(
                                "w-full h-full flex flex-col items-center justify-center gap-3",
                                salary === "Hourly" &&
                                  "border-black dark:border-white border-2"
                              )}
                              onClick={() => {
                                setSalary("Hourly");
                                field.onChange("Hourly");
                              }}
                            >
                              <SolarClockCircleBoldDuotone className="text-icon-light dark:text-icon-dark text-4xl" />
                              Hourly
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              className={clsx(
                                "w-full h-full flex flex-col items-center justify-center gap-3",
                                salary === "Custom" &&
                                  "border-black dark:border-white border-2"
                              )}
                              onClick={() => {
                                setSalary("Custom");
                                field.onChange("Custom");
                              }}
                            >
                              <SolarSalary className="text-icon-light dark:text-icon-dark text-4xl" />
                              Custom
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Price</h1>
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
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Address</h1>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Address"
                            className="h-fit"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Company</h1>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Company"
                            className="h-fit"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Phone number</h1>
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone number"
                            className="h-fit"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="bold-value-3">Benefits</h1>
                  <FormField
                    control={form.control}
                    name="benefits"
                    render={() => (
                      <FormItem className="grid grid-cols-2 space-y-0 gap-4">
                        {jobBenefits.map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="benefits"
                            render={({ field }) => {
                              return (
                                <FormItem key={item}>
                                  <FormControl>
                                    <div className="flex items-center gap-3">
                                      <Checkbox
                                        id={item}
                                        checked={field.value?.includes(item)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item
                                                )
                                              );
                                        }}
                                      />
                                      <Label htmlFor={item}>{item}</Label>
                                    </div>
                                  </FormControl>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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

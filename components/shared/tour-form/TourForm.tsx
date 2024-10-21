"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// react query
import { useMutation, useQuery } from "@tanstack/react-query";
// actions
import { createTour } from "@/actions/tour";
// services
import { fetchAdmins } from "@/services/queries";
// types
import { TourFormProps } from "@/types/components";
// form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// utils
import { tourFormSchema } from "@/utils/validators";
import { cn } from "@/lib/utils";
// constants
import { tourServices, images as constantsImages } from "@/constants";
// icons
import { SolarCalendarBoldDuotone } from "@/components/svg";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import TourFileUploader from "./ui/TourFileUploader";

const TourForm = ({ type, tour }: TourFormProps) => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    tour ? new Date(tour?.startDate) : undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    tour ? new Date(tour?.endDate) : undefined
  );
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>(tour?.images || []);
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
  });
  const { isLoading: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: createTour,
  });
  // const { isLoading: isEditing, mutate: mutateEdit } = useMutation({
  //   mutationFn: editTour,
  // });

  const formDefaultValues = {
    name: tour ? tour?.name : "",
    content: tour ? tour?.content : "",
    images: tour ? tour?.images : images,
    price: tour ? tour?.price : "",
    discount: tour ? tour?.discount : "",
    published: tour ? tour?.published : true,
    tags: tour ? tour?.tags : [],
    services: tour ? tour?.services : [],
    tourGuide: tour ? tour?.tourGuide?._id : "",
    startDate,
    endDate,
    duration: tour ? tour?.duration : "",
    destination: tour ? tour?.destination : "",
  };

  // Define form.
  const form = useForm<z.infer<typeof tourFormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(tourFormSchema),
    defaultValues: formDefaultValues,
  });

  // Define submit handler.
  const onSubmit = async (values: z.infer<typeof tourFormSchema>) => {
    if (!!values.images.find((item) => typeof item !== "string")) {
      toast.error("Upload your files first!");
      return;
    }

    const formData = {
      ...values,
      price: +values.price,
      discount: +values.discount,
    };

    if (type === "create") {
      mutateCreate(formData, {
        onSuccess: (data) => {
          toast.success(data?.message);
          router.push("/tour/list");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });

      return;
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
              <CardDescription>
                Title, short description, image...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card space-y-10">
              <CardContent className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Tour name"
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
              </CardContent>
              <CardContent className="flex flex-col gap-5">
                <h1 className="text-small font-semibold">Content</h1>
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
              <CardContent className="space-y-8">
                <h1 className="text-small font-semibold">Images</h1>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TourFileUploader
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
                Additional functions and attributes...
              </CardDescription>
            </CardHeader>
            <div className="px-card pb-card">
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Tour guide</h1>
                  <FormField
                    control={form.control}
                    name="tourGuide"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
                              <SelectValue placeholder="Tour guide" />
                            </SelectTrigger>
                            <SelectContent>
                              {data?.map((user: any) => (
                                <SelectItem key={user._id} value={user._id}>
                                  <div className="flex items-center gap-2">
                                    <div className="w-[30px] h-[30px] shrink-0">
                                      <Image
                                        src={
                                          user.avatar || constantsImages.admin
                                        }
                                        width={100}
                                        height={100}
                                        alt="user"
                                        priority
                                        className="w-full h-full rounded-full"
                                      />
                                    </div>
                                    <span>{user.name}</span>
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
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Available</h1>
                  <View variant="flex-gap">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className={cn(
                                    "w-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent flex items-center justify-between py-[16px] px-[14px] rounded-md border border-slate-200 dark:border-slate-700",
                                    !startDate && "text-muted-foreground"
                                  )}
                                >
                                  {startDate ? (
                                    format(startDate, "MM/dd/yyyy")
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
                                    setStartDate(date);
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
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className={cn(
                                    "w-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent flex items-center justify-between py-[16px] px-[14px] rounded-md border border-slate-200 dark:border-slate-700",
                                    !endDate && "text-muted-foreground"
                                  )}
                                >
                                  {endDate ? (
                                    format(endDate, "MM/dd/yyyy")
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
                                    setEndDate(date);
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
                  </View>
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Duration</h1>
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Ex:2 days, 4 days 3 nights..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Destination</h1>
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Destination..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Services</h1>
                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem className="grid grid-cols-2 space-y-0 gap-4">
                        {tourServices.map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="services"
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
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Price</h1>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Price..."
                            type="number"
                            min={0}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Discount</h1>
                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Discount..."
                            type="number"
                            min={0}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-small font-semibold">Tags</h1>
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
              disabled={isCreating}
            >
              {isCreating ? (
                <Loader />
              ) : type === "create" ? (
                "Create tour"
              ) : (
                "Edit tour"
              )}
            </Button>
          </div>
        </View>
      </form>
    </Form>
  );
};

export default TourForm;

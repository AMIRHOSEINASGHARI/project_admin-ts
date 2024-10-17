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

  return <div>JobForm</div>;
};

export default JobForm;

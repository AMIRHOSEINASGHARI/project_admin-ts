"use client";

// react query
import { useMutation } from "@tanstack/react-query";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// utils
import { userFormSchema } from "@/utils/validators";
// types
import { AdminType } from "@/types/admin";
import { UserFormPorps } from "@/types/components";
// cmp
import View from "@/components/shared/layout/View";
import UploadAvatar from "./UploadAvatar";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
import clsx from "clsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UserForm = ({ type, user }: UserFormPorps) => {
  const formDefaultValues = {
    username: user?.username || "",
    password: user?.password || "",
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || 0,
    address: user?.address || "",
    country: user?.country || "",
    avatar: user?.avatar || "",
    roll: user?.roll || "",
    state: user?.state || "",
    city: user?.city || "",
    company: user?.company || "",
    zipcode: user?.zipcode || 0,
    status: user?.status || "",
  };

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: formDefaultValues,
  });

  const onSubmit = async (values: z.infer<typeof userFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <View variant="flex-gap">
          <UploadAvatar />
          <Card className="w-full xl:w-[65%]">others</Card>
        </View>
      </form>
    </Form>
  );
};

export default UserForm;

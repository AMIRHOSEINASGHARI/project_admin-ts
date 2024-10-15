"use client";

// react
import { useState } from "react";
// react query
import { useMutation } from "@tanstack/react-query";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// utils
import { userFormSchema } from "@/utils/validators";
// types
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
  const [files, setFiles] = useState<File[]>([]);
  const [avatar, setAvatar] = useState<string>(user?.avatar || "");
  const [isVerified, setIsVerified] = useState<boolean>(
    user ? user?.isVerified : true
  );

  const formDefaultValues = {
    username: user?.username || "",
    password: user?.password || "",
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
    country: user?.country || "",
    avatar: user?.avatar || "",
    roll: user?.roll || "",
    state: user?.state || "",
    city: user?.city || "",
    company: user?.company || "",
    zipcode: user?.zipcode || 0,
    status: user?.status || "",
    isVerified,
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
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem className="w-full xl:w-[35%]">
                <FormControl>
                  <UploadAvatar
                    avatar={avatar}
                    setAvatar={setAvatar}
                    files={files}
                    setFiles={setFiles}
                    onFieldChange={field.onChange}
                    isVerified={isVerified}
                    setIsVerified={setIsVerified}
                    formMessage={<FormMessage />}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Card className="h-fit w-full xl:w-[65%]">
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email address"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Phone number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Country" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="State/region" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="City" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Zipcode" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Company" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roll"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Roll" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-5 flex justify-end">
              <Button
                type="submit"
                className="font-bold min-w-[100px]"
                // disabled={isCreating || isEditing}
              >
                {false ? (
                  <Loader />
                ) : type === "create" ? (
                  "Create user"
                ) : (
                  "Edit user"
                )}
              </Button>
            </div>
          </Card>
        </View>
      </form>
    </Form>
  );
};

export default UserForm;

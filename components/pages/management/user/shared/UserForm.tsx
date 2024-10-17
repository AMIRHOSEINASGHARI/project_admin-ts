"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
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
// actions
import { createUser, editUser } from "@/actions/admin";
// cmp
import View from "@/components/shared/layout/View";
import UploadAvatar from "./UploadAvatar";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const UserForm = ({ type, user }: UserFormPorps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [avatar, setAvatar] = useState<string>(user?.avatar || "");
  const [isVerified, setIsVerified] = useState<boolean>(
    user ? user?.isVerified : true
  );
  const router = useRouter();
  const { isLoading: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: createUser,
  });
  const { isLoading: isEditing, mutate: mutateEdit } = useMutation({
    mutationFn: editUser,
  });

  const formDefaultValues = {
    username: user ? user?.username : "",
    name: user ? user?.name : "",
    email: user ? user?.email : "",
    phoneNumber: user ? user?.phoneNumber : "",
    address: user ? user?.address : "",
    country: user ? user?.country : "",
    avatar: user ? user?.avatar : "",
    role: user ? user?.role : "",
    state: user ? user?.state : "",
    city: user ? user?.city : "",
    company: user ? user?.company : "",
    zipcode: user ? user?.zipcode : 0,
    isVerified,
    about: user ? user?.about : "",
  };

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: formDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof userFormSchema>) => {
    const formData = {
      ...values,
      zipcode: +values.zipcode,
    };

    if (type === "create") {
      mutateCreate(formData, {
        onSuccess: (data) => {
          toast.success(data?.message);
          router.push("/user/list");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });
    }
    if (type === "edit") {
      mutateEdit(
        { ...formData, userId: user?._id },
        {
          onSuccess: (data) => {
            toast.success(data?.message);
            router.push("/user/list");
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
                      <Input
                        {...field}
                        placeholder="Zipcode"
                        type="number"
                        min={0}
                      />
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
                name="role"
                render={({ field }) => (
                  <FormItem className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Role"
                        disabled={user?.role === "OWNER"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder="About (Optional)"
                      />
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
                disabled={isCreating || isEditing}
              >
                {isCreating || isEditing ? (
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

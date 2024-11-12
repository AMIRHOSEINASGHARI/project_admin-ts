"use client";

// react
import { useState } from "react";
import { useRouter } from "next/navigation";
// react query
import { useMutation } from "@tanstack/react-query";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { loginUser } from "@/actions/auth";
// utils
import { authFormSchema } from "@/utils/validators";
// cmp
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
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
// icons
import {
  LogoRegular,
  SolarEyeBoldDuotone,
  SolarEyeClosedBoldDuotone,
} from "@/components/svg";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

const AuthForm = () => {
  const { replace } = useRouter();
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const { isLoading, mutate } = useMutation({
    mutationFn: loginUser,
  });

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      username: "demo@onlineshop.com",
      password: "demo1234",
    },
  });

  const onSubmit = async (values: z.infer<typeof authFormSchema>) => {
    mutate(values, {
      onSuccess: (data) => {
        toast.success(data?.message);
        replace("/dashboard");
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="fixed z-40 w-full flex flex-col items-center justify-center h-screen p-6"
      >
        <Card className="shadow-none dark:shadow-dark">
          <div className="sm:w-[400px]">
            <div className="mb-[20px] flex flex-col justify-center items-center">
              <LogoRegular className="text-[50px] text-primary-1" />
              <h1 className="text-gray-600 dark:text-light2 mb-[10px] font-bold text-2xl">
                Welcome back! 👋🏻
              </h1>
              <p className="text-gray-500 tracking-tight text-sm">
                Please sign-in to your account and start the adventure
              </p>
            </div>
            <div className="space-y-5 mb-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="Transition"
                        placeholder="Enter your username..."
                        {...field}
                      />
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
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="Transition"
                          placeholder="Enter your password..."
                          type={passwordType}
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={() =>
                          setPasswordType(
                            passwordType === "password" ? "text" : "password"
                          )
                        }
                        variant="icon"
                        className="rounded-lg absolute top-1 right-1 bottom-1"
                      >
                        {passwordType === "text" ? (
                          <SolarEyeBoldDuotone />
                        ) : (
                          <SolarEyeClosedBoldDuotone />
                        )}
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isLoading}
                className={clsx(
                  "w-full",
                  !isLoading &&
                    "bg-primary-1 hover:bg-primary-3 dark:bg-primary-4 dark:hover:bg-primary-5"
                )}
              >
                {isLoading ? <Loader text="Sending data..." /> : "Submit"}
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  );
};

export default AuthForm;

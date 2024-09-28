"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// react query
import { useMutation } from "@tanstack/react-query";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { loginUser } from "@/actions/auth";
// constants
import { images } from "@/constants";
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
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";
// icons
import {
  LogoRegular,
  SolarEyeBoldDuotone,
  SolarEyeClosedBoldDuotone,
} from "@/components/svg";

const AuthForm = () => {
  const router = useRouter();
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
        router.push("/dashboard");
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
        className="flex items-center gap-[150px] bg-white dark:bg-dark1 p-[30px]"
      >
        <div className="max-xl:hidden bg-gray-100 dark:bg-dark2 rounded-3xl h-screen w-1/2 flex items-center justify-center">
          <Image
            src={images.authLogin}
            priority
            width={450}
            height={450}
            alt="auth-login"
          />
        </div>
        <div className="max-xl:flex max-xl:justify-center max-xl:mt-16 max-xl:w-full">
          <div className="sm:w-[400px]">
            <div className="mb-[20px]">
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
                className="w-full"
              >
                {isLoading ? <Loader text="Sending data..." /> : "Submit"}
              </Button>
              <div className="w-full flex justify-center">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;

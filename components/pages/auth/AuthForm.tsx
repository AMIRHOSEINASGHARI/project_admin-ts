"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// z - hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { loginUser } from "@/actions/auth";
// hooks
import useServerAction from "@/hooks/callServerAction";
// enums
import { ResponseCodes } from "@/enums";
// constants
import { images } from "@/constants";
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
import clsx from "clsx";
// icons
import { EyeCrossedRegular, EyeRegular, LogoRegular } from "@/components/svg";

// form schema
const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be between 4 and 10 characters" })
    .max(10, { message: "َUsername must be between 4 and 10 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be between 4 and 10 characters" })
    .max(10, { message: "Password must be between 4 and 10 characters" }),
});

const AuthForm = () => {
  const { replace } = useRouter();
  const { loading, action } = useServerAction(loginUser);
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await action(values);

    if (result?.code === ResponseCodes.SUCCESSFULLY_CREATED) {
      toast.success(result?.message);
      replace("/dashboard");
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-[150px] bg-white p-[30px]"
      >
        <div className="max-xl:hidden bg-gray-100 rounded-3xl h-screen w-1/2 flex items-center justify-center">
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
              <LogoRegular className="text-[50px] logo-color" />
              <h1 className="text-gray-600 mb-[10px] font-bold text-2xl">
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
                        className="btn_icon absolute top-1 right-1 bottom-1"
                      >
                        {passwordType === "text" ? (
                          <EyeRegular />
                        ) : (
                          <EyeCrossedRegular />
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
                disabled={loading}
                className={clsx("w-full", {
                  "bg-gray-100 text-dark1": loading,
                })}
              >
                {loading ? <Loader text="Sending data..." /> : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;

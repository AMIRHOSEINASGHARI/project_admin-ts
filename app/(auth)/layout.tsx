import { getServerSession } from "@/utils/session";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (session) {
    redirect("/dashboard");
  }
  return <div>{children}</div>;
};

export default AuthLayout;

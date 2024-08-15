// react
import React from "react";
// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return <div>{children}</div>;
};

export default PagesLayout;

// react
import React from "react";
// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
// cmp
import Navbar from "@/components/shared/layout/Navbar";
import Sidebar from "@/components/shared/layout/Sidebar";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pages_spaces">{children}</div>
    </div>
  );
};

export default PagesLayout;

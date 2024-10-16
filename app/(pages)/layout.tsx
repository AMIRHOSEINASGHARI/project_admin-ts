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

  if (session?.role !== "OWNER") {
    return (
      <div className="text-center flex items-center justify-center flex-col h-screen dark:text-white">
        <span className="bold-value">Access Denied!</span>
        <p className="text-error-light dark:text-error-dark">
          Only Owners can visit this page!
        </p>
      </div>
    );
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

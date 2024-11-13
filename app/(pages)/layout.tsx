// react
import React from "react";
// next
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
// utils
import { getServerSession } from "@/utils/session";
// cmp
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/layout/app-sidebar";
import Navbar from "@/components/shared/layout/Navbar";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

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
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <div className="pages_spaces2">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default PagesLayout;

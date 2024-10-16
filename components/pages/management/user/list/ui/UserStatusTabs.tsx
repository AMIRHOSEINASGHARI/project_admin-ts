"use client";

// react
import { useState } from "react";
// types
import { AdminType } from "@/types/admin";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const UserStatusTabs = ({ admins }: { admins: AdminType[] }) => {
  const [activeTab, setActiveTab] = useState("All");

  const active = admins?.filter((admin) => admin?.status === "Active")?.length;
  const pending = admins?.filter(
    (admin) => admin?.status === "Pending"
  )?.length;
  const banned = admins?.filter((admin) => admin?.status === "Banned")?.length;
  const rejected = admins?.filter(
    (admin) => admin?.status === "Rejected"
  )?.length;

  const tabData = [
    {
      title: "All",
      number: admins?.length || 0,
      value: "All",
      colors:
        "bg-slate-900 text-slate-100 dark:bg-slate-200 dark:text-slate-900",
      isActive: activeTab === "All",
    },
    {
      title: "Active",
      number: active || 0,
      value: "Active",
      colors:
        activeTab === "Active" ? "bg-green-500 text-white" : "badge-green",
      isActive: activeTab === "Active",
    },
    {
      title: "Pending",
      number: pending || 0,
      value: "Pending",
      colors:
        activeTab === "Pending" ? "bg-orange-500 text-white" : "badge-orange",
      isActive: activeTab === "Pending",
    },
    {
      title: "Banned",
      number: banned || 0,
      value: "Banned",
      colors: activeTab === "Banned" ? "bg-rose-500 text-white" : "badge-rose",
      isActive: activeTab === "Banned",
    },
    {
      title: "Rejected",
      number: rejected || 0,
      value: "Rejected",
      colors:
        activeTab === "Rejected" ? "bg-gray-500 text-white" : "badge-gray",
      isActive: activeTab === "Rejected",
    },
  ];

  return (
    <Tabs
      defaultValue="All"
      className="w-full"
      onValueChange={(value) => setActiveTab(value)}
    >
      <div className="px-4 border-b-[3px] border-slate-100 dark:border-dark3">
        <TabsList className="gap-8 rounded-none bg-transparent dark:bg-transparent">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={clsx(
                "border-b-[3px] border-transparent flex gap-3 px-0 py-3 rounded-none shadow-none",
                {
                  "border-black dark:border-white": tab.isActive,
                }
              )}
            >
              <span
                className={clsx("text-small", {
                  "text-slate-400 dark:text-slate-500": !tab.isActive,
                })}
              >
                {tab.title}
              </span>
              <span className={`rounded-md h-full px-2 ${tab.colors}`}>
                {tab.number}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};

export default UserStatusTabs;

"use client";

// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const UserStatusTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { handleSetQuery, handleDeleteQuery, searchParams } =
    useHandleSearchParams("status");

  const tabData = [
    {
      title: "All",
      value: "All",
      colors:
        "bg-slate-900 text-slate-100 dark:bg-slate-200 dark:text-slate-900",
      isActive: activeTab === "All",
    },
    {
      title: "Active",
      value: "Active",
      colors:
        activeTab === "Active" ? "bg-green-500 text-white" : "badge-green",
      isActive: activeTab === "Active",
    },
    {
      title: "Pending",
      value: "Pending",
      colors:
        activeTab === "Pending" ? "bg-orange-500 text-white" : "badge-orange",
      isActive: activeTab === "Pending",
    },
    {
      title: "Banned",
      value: "Banned",
      colors: activeTab === "Banned" ? "bg-rose-500 text-white" : "badge-rose",
      isActive: activeTab === "Banned",
    },
    {
      title: "Rejected",
      value: "Rejected",
      colors:
        activeTab === "Rejected" ? "bg-gray-500 text-white" : "badge-gray",
      isActive: activeTab === "Rejected",
    },
  ];

  const onValueChange = (value: string) => {
    setActiveTab(value);

    if (value === "All") {
      handleDeleteQuery("status");
      setActiveTab("All");
    } else {
      handleSetQuery(value);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("status")) {
      setActiveTab("All");
    } else {
      setActiveTab(searchParams.get("status")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Tabs
      className="w-full"
      value={activeTab}
      onValueChange={(value) => onValueChange(value)}
    >
      <div className="px-4 border-b-[3px] border-slate-100 dark:border-dark3">
        <TabsList className="gap-8 rounded-none bg-transparent dark:bg-transparent">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="border-b-[3px] border-transparent flex gap-3 px-0 py-3 rounded-none shadow-none data-[state=active]:border-black data-[state=active]:dark:border-white"
            >
              <span
                className={clsx(
                  `text-small rounded-md h-full px-2 ${tab.colors}`,
                  {
                    "text-slate-400 dark:text-slate-500": !tab.isActive,
                  }
                )}
              >
                {tab.title}
              </span>
              {/* <span className={`rounded-md h-full px-2 ${tab.colors}`}>
                {tab.number}
              </span> */}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};

export default UserStatusTabs;

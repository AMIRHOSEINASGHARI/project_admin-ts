"use client";

// react
import { useState } from "react";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const BLogsTabSorting = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabData = [
    {
      title: "All",
      value: "All",
      colors:
        "bg-slate-900 text-slate-100 dark:bg-slate-200 dark:text-slate-900",
      isActive: activeTab === "All",
    },
    {
      title: "Published",
      value: "Published",
      colors:
        activeTab === "Published" ? "bg-blue-600 text-white" : "badge-blue",
      isActive: activeTab === "Published",
    },
    {
      title: "Draft",
      value: "Draft",
      colors: activeTab === "Draft" ? "bg-gray-600 text-white" : "badge-gray",
      isActive: activeTab === "Draft",
    },
  ];

  return (
    <Tabs
      defaultValue="All"
      className="w-full my-8"
      onValueChange={(value) => setActiveTab(value)}
    >
      <div>
        <TabsList className="gap-8 rounded-none bg-transparent dark:bg-transparent">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={clsx(
                "border-b-[3px] dark:data-[state=active]:bg-transparent border-transparent flex gap-3 px-0 py-3 rounded-none shadow-none",
                {
                  "border-black dark:border-white": tab.isActive,
                }
              )}
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
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};

export default BLogsTabSorting;

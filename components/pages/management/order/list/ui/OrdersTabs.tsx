// react
import { useState } from "react";
// types
import { OrderType } from "@/types/order";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const OrdersTabs = () => {
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
      title: "Pending",
      value: "Pending",
      colors:
        activeTab === "Pending" ? "bg-orange-500 text-white" : "badge-orange",
      isActive: activeTab === "Pending",
    },
    {
      title: "Completed",
      value: "Completed",
      colors:
        activeTab === "Completed" ? "bg-green-500 text-white" : "badge-green",
      isActive: activeTab === "Completed",
    },
    {
      title: "Canceled",
      value: "Canceled",
      colors:
        activeTab === "Canceled" ? "bg-rose-500 text-white" : "badge-rose",
      isActive: activeTab === "Canceled",
    },
    {
      title: "Refunded",
      value: "Refunded",
      colors:
        activeTab === "Refunded" ? "bg-gray-600 text-white" : "badge-gray",
      isActive: activeTab === "Refunded",
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
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};

export default OrdersTabs;

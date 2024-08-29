// react
import { useState } from "react";
// types
import { OrderType } from "@/types/order";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const OrdersTabs = ({ orders }: { orders: OrderType[] }) => {
  const [activeTab, setActiveTab] = useState("all");

  const pending = orders?.filter(
    (order) => order?.status === "Pending"
  )?.length;
  const completed = orders?.filter(
    (order) => order?.status === "Completed"
  )?.length;

  const tabData = [
    {
      title: "All",
      number: orders?.length || 0,
      value: "all",
      colors:
        "bg-slate-900 text-slate-100 dark:bg-slate-200 dark:text-slate-900",
      isActive: activeTab === "all",
    },
    {
      title: "Pending",
      number: pending || 0,
      value: "pending",
      colors:
        activeTab === "pending"
          ? "bg-orange-500 text-black"
          : "bg-orange-100 text-orange-700 dark:text-orange-300 dark:bg-orange-700/30",
      isActive: activeTab === "pending",
    },
    {
      title: "Completed",
      number: completed || 0,
      value: "completed",
      colors:
        activeTab === "completed"
          ? "bg-green-500 text-white"
          : "bg-green-100 text-green-700 dark:text-green-300 dark:bg-green-700/30",
      isActive: activeTab === "completed",
    },
  ];

  return (
    <Tabs
      defaultValue="all"
      className="w-full"
      onValueChange={(value) => setActiveTab(value)}
    >
      <div className="px-3 border-b dark:border-dark3">
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

export default OrdersTabs;

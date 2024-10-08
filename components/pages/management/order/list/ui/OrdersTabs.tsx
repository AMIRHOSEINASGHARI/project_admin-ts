// react
import { useState } from "react";
// types
import { OrderType } from "@/types/order";
// cmp
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

const OrdersTabs = ({ orders }: { orders: OrderType[] }) => {
  const [activeTab, setActiveTab] = useState("All");

  const pending = orders?.filter(
    (order) => order?.status === "Pending"
  )?.length;
  const completed = orders?.filter(
    (order) => order?.status === "Completed"
  )?.length;
  const canceled = orders?.filter(
    (order) => order?.status === "Canceled"
  )?.length;
  const refunded = orders?.filter(
    (order) => order?.status === "Refunded"
  )?.length;

  const tabData = [
    {
      title: "All",
      number: orders?.length || 0,
      value: "All",
      colors:
        "bg-slate-900 text-slate-100 dark:bg-slate-200 dark:text-slate-900",
      isActive: activeTab === "All",
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
      title: "Completed",
      number: completed || 0,
      value: "Completed",
      colors:
        activeTab === "Completed" ? "bg-green-500 text-white" : "badge-green",
      isActive: activeTab === "Completed",
    },
    {
      title: "Canceled",
      number: canceled || 0,
      value: "Canceled",
      colors:
        activeTab === "Canceled" ? "bg-rose-500 text-white" : "badge-rose",
      isActive: activeTab === "Canceled",
    },
    {
      title: "Refunded",
      number: refunded || 0,
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

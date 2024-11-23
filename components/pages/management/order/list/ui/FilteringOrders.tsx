"use client";

// constants
import { ordersPageQueries } from "@/constants";
// cmp
import View from "@/components/shared/layout/View";
import OrdersTabs from "./OrdersTabs";
import CalendarSearch from "./CalendarSearch";
import TextSearch from "./TextSearch";
import OtherActions from "./OtherActions";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const FilteringOrders = () => {
  return (
    <>
      <OrdersTabs />
      <View variant="flex-gap" className="p-4 w-full">
        <CalendarSearch />
        <div className="flex items-center justify-between gap-5 w-full xl:w-[60%]">
          <TextSearch />
          <OtherActions />
        </div>
      </View>
      <DeletePageQueries className="px-4 pb-4" filters={ordersPageQueries} />
    </>
  );
};

export default FilteringOrders;

"use client";

// cmp
import View from "@/components/shared/layout/View";
import OrdersTabs from "./OrdersTabs";
import CalendarSearch from "./CalendarSearch";
import TextSearch from "./TextSearch";
import OtherActions from "./OtherActions";

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
    </>
  );
};

export default FilteringOrders;

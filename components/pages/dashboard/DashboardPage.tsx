// react
import { Suspense } from "react";
// cmp
import View from "@/components/shared/layout/View";
import Reviews from "./ui/Reviews";
import UsersCompare from "./ui/UsersCompare";
import RevenuePieChart from "./ui/RevenuePieChart";
import NewInvoices from "./ui/NewInvoices";
import UpcommingEvents from "./ui/UpcommingEvents";
import LoaderBar from "@/components/shared/LoaderBar";
import RevenueRadialChart from "./ui/RevenueRadialChart";

const DashboardPage = () => {
  return (
    <View orientation="vertical">
      <Reviews />
      <View className="grid grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-x-5">
        <RevenuePieChart />
        <UsersCompare />
      </View>
      <RevenueRadialChart />
      <View variant="flex-gap">
        <NewInvoices />
        <Suspense fallback={<LoaderBar />}>
          <UpcommingEvents />
        </Suspense>
      </View>
    </View>
  );
};

export default DashboardPage;

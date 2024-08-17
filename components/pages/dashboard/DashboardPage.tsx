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
      <View className="flex flex-col xl:flex-row gap-5">
        <UsersCompare />
        <RevenuePieChart />
      </View>
      <RevenueRadialChart />
      <View className="flex flex-col xl:flex-row gap-5">
        <NewInvoices />
        <Suspense fallback={<LoaderBar />}>
          <UpcommingEvents />
        </Suspense>
      </View>
    </View>
  );
};

export default DashboardPage;

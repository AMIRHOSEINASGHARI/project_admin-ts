// cmp
import View from "@/components/shared/layout/View";
import Reviews from "./ui/Reviews";
import UsersCompare from "./ui/UsersCompare";
import RevenuePieChart from "./ui/RevenuePieChart";
import NewInvoices from "./ui/NewInvoices";

const DashboardPage = () => {
  return (
    <View orientation="vertical">
      <Reviews />
      <View className="flex flex-col xl:flex-row gap-5">
        <UsersCompare />
        <RevenuePieChart />
      </View>
      <View className="flex flex-col xl:flex-row gap-5">
        <NewInvoices />
      </View>
    </View>
  );
};

export default DashboardPage;

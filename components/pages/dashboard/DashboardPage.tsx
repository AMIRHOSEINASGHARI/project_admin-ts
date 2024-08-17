// cmp
import View from "@/components/shared/layout/View";
import Reviews from "./ui/Reviews";
import RevenueCompare from "./ui/RevenueCompare";
import RevenuePieChart from "./ui/RevenuePieChart";

const DashboardPage = () => {
  return (
    <View orientation="vertical">
      <Reviews />
      <View className="flex flex-col xl:flex-row gap-8">
        <RevenueCompare />
        <RevenuePieChart />
      </View>
    </View>
  );
};

export default DashboardPage;

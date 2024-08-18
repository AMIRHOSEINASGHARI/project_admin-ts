import View from "@/components/shared/layout/View";
import AnalyticsCards from "./ui/AnalyticsCards";
import CurrentVisits from "./ui/CurrentVisits";

const AnalyticsPage = () => {
  return (
    <View orientation="vertical">
      <View orientation="vertical">
        <AnalyticsCards />
      </View>
      <View className="flex flex-col xl:flex-row gap-5">
        <CurrentVisits />
      </View>
    </View>
  );
};

export default AnalyticsPage;

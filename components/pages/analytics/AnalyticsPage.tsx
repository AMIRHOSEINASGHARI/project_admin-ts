import View from "@/components/shared/layout/View";
import AnalyticsCards from "./ui/AnalyticsCards";
import CurrentVisits from "./ui/CurrentVisits";
import WebsiteVisits from "./ui/WebsiteVisits";
import ConversionRates from "./ui/ConversionRates";

const AnalyticsPage = () => {
  return (
    <View orientation="vertical">
      <View orientation="vertical">
        <AnalyticsCards />
      </View>
      <View className="flex flex-col xl:flex-row gap-5">
        <CurrentVisits />
        <WebsiteVisits />
      </View>
      <View className="flex flex-col xl:flex-row gap-5">
        <ConversionRates />
      </View>
    </View>
  );
};

export default AnalyticsPage;

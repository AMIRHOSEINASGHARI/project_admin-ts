import View from "@/components/shared/layout/View";
import AnalyticsCards from "./ui/AnalyticsCards";
import CurrentVisits from "./ui/CurrentVisits";
import WebsiteVisits from "./ui/WebsiteVisits";
import ConversionRates from "./ui/ConversionRates";
import CurrentSubject from "./ui/CurrentSubject";

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
        <CurrentSubject />
      </View>
    </View>
  );
};

export default AnalyticsPage;

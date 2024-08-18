import View from "@/components/shared/layout/View";
import AnalyticsCards from "./ui/AnalyticsCards";
import CurrentVisits from "./ui/CurrentVisits";
import WebsiteVisits from "./ui/WebsiteVisits";
import ConversionRates from "./ui/ConversionRates";
import CurrentSubject from "./ui/CurrentSubject";
import News from "./ui/News";
import TrafficBySite from "./ui/TrafficBySite";

const AnalyticsPage = () => {
  return (
    <View orientation="vertical">
      <View orientation="vertical">
        <AnalyticsCards />
      </View>
      <View variant="flex-gap">
        <CurrentVisits />
        <WebsiteVisits />
      </View>
      <View variant="flex-gap">
        <ConversionRates />
        <CurrentSubject />
      </View>
      <News />
      <View variant="flex-gap">
        <TrafficBySite />
      </View>
    </View>
  );
};

export default AnalyticsPage;

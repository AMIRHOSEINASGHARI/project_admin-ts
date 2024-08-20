import View from "@/components/shared/layout/View";
import EcommercePageCards from "./ui/EcommercePageCards";
import SaleByGender from "./ui/SaleByGender";
import YearlySales from "./ui/YearlySales";
import SalesOverview from "./ui/SalesOverview";

const EcommercePage = () => {
  return (
    <View orientation="vertical">
      <EcommercePageCards />
      <View variant="flex-gap">
        <SaleByGender />
        <YearlySales />
      </View>
      <View variant="flex-gap">
        <SalesOverview />
      </View>
    </View>
  );
};

export default EcommercePage;

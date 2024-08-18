import View from "@/components/shared/layout/View";
import EcommercePageCards from "./ui/EcommercePageCards";
import SaleByGender from "./ui/SaleByGender";

const EcommercePage = () => {
  return (
    <View orientation="vertical">
      <EcommercePageCards />
      <View variant="flex-gap">
        <SaleByGender />
      </View>
    </View>
  );
};

export default EcommercePage;

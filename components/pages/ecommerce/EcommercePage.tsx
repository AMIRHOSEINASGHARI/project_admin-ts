// react
import { Suspense } from "react";
// cmp
import View from "@/components/shared/layout/View";
import EcommercePageCards from "./ui/EcommercePageCards";
import SaleByGender from "./ui/SaleByGender";
import YearlySales from "./ui/YearlySales";
import SalesOverview from "./ui/SalesOverview";
import CurrentBalance from "./ui/CurrentBalance";
import BestSalesman from "./ui/BestSalesman";
import LatestProducts from "./ui/LatestProducts";
import LoaderBar from "@/components/shared/LoaderBar";

// TODO: making cards grids

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
        <CurrentBalance />
      </View>
      <View variant="flex-gap">
        <BestSalesman />
        <Suspense fallback={<LoaderBar />}>
          <LatestProducts />
        </Suspense>
      </View>
    </View>
  );
};

export default EcommercePage;

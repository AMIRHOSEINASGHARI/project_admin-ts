import View from "@/components/shared/layout/View";
import StockFilter from "./StockFilter";
import PublishFilter from "./PublishFilter";
import SearchTextFilter from "./SearchTextFilter";
import CategoryFilter from "./CategoryFilter";
import { Button } from "@/components/ui/button";
import { SolareExportBoldDuotone } from "@/components/svg";

const FilteringProducts = () => {
  return (
    <div>
      <View className="p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <SearchTextFilter />
        <StockFilter />
        <PublishFilter />
        <CategoryFilter />
      </View>
    </div>
  );
};

export default FilteringProducts;

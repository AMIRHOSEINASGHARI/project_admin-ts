// cmp
import View from "@/components/shared/layout/View";
import StockFilter from "./StockFilter";
import PublishFilter from "./PublishFilter";
import CategoryFilter from "./CategoryFilter";
import ProductsSearchTextFilter from "./ProductsSearchTextFilter";
import DiscountFilter from "./DiscountFilter";

const FilteringProducts = () => {
  return (
    <View className="p-4 space-y-5">
      <div className="flex flex-wrap gap-5">
        <ProductsSearchTextFilter />
        <CategoryFilter />
      </div>
      <div className="flex flex-wrap gap-5">
        <StockFilter />
        <PublishFilter />
        <DiscountFilter />
      </div>
    </View>
  );
};

export default FilteringProducts;

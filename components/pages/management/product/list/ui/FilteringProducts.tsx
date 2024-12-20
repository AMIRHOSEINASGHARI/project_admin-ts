// constants
import { productsPageQueries } from "@/constants";
// cmp
import View from "@/components/shared/layout/View";
import StockFilter from "./StockFilter";
import PublishFilter from "./PublishFilter";
import CategoryFilter from "./CategoryFilter";
import ProductsSearchTextFilter from "./ProductsSearchTextFilter";
import DiscountFilter from "./DiscountFilter";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const FilteringProducts = () => {
  return (
    <>
      <View className="p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
        <ProductsSearchTextFilter />
        <CategoryFilter />
        <StockFilter />
        <PublishFilter />
        <DiscountFilter />
      </View>
      <div className="px-4 pb-4">
        <DeletePageQueries filters={productsPageQueries} />
      </div>
    </>
  );
};

export default FilteringProducts;

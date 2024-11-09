// types
import { ProductsListParams } from "@/types/components";
// cmp
import ProductsListPage from "@/components/pages/management/product/list/ProductsListPage";

export const dynamic = "force-dynamic";

const ProductsList = ({
  searchParams,
}: {
  searchParams: Promise<ProductsListParams>;
}) => {
  return <ProductsListPage searchParams={searchParams} />;
};

export default ProductsList;

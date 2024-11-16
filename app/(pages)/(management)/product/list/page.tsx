// next
import { Metadata } from "next";
// types
import { ProductsListParams } from "@/types/product";
// cmp
import ProductsListPage from "@/components/pages/management/product/list/ProductsListPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products list",
};

const ProductsList = ({
  searchParams,
}: {
  searchParams: Promise<ProductsListParams>;
}) => {
  return <ProductsListPage searchParams={searchParams} />;
};

export default ProductsList;

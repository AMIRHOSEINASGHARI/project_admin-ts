import ProductsListPage from "@/components/pages/management/product/list/ProductsListPage";

export const dynamic = "force-dynamic";

const ProductsList = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <ProductsListPage searchParams={searchParams} />;
};

export default ProductsList;

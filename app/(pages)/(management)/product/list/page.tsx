import ProductsPage from "@/components/pages/products/ProductsPage";

export const dynamic = "force-dynamic";

const Products = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <ProductsPage searchParams={searchParams} />;
};

export default Products;

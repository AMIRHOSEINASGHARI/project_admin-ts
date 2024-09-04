import ProductsPage from "@/components/pages/products/ProductsPage";

const Products = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <ProductsPage searchParams={searchParams} />;
};

export default Products;

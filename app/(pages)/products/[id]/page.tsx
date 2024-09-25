import ProductDetailsPage from "@/components/pages/product/ProductDetailsPage";

const Product = ({ params }: { params: { id: string } }) => {
  return <ProductDetailsPage id={params.id} />;
};

export default Product;

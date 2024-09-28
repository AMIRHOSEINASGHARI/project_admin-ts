// types
import { PageParams } from "@/types/pages";
// cmp
import ProductDetailsPage from "@/components/pages/product/ProductDetailsPage";

const Product = ({ params: { id } }: PageParams) => {
  return <ProductDetailsPage id={id} />;
};

export default Product;

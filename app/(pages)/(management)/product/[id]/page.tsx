// types
import { PageParams } from "@/types/pages";
// cmp
import ProductDetailsPage from "@/components/pages/management/product/details/ProductDetailsPage";

const ProductDetails = ({ params: { id } }: PageParams) => {
  return <ProductDetailsPage id={id} />;
};

export default ProductDetails;

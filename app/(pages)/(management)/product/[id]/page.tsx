// actions
import { getProduct } from "@/actions/product";
// types
import { PageParams } from "@/types/pages";
// cmp
import ProductDetailsPage from "@/components/pages/management/product/details/ProductDetailsPage";

const ProductDetails = ({ params: { id } }: PageParams) => {
  return <ProductDetailsPage id={id} />;
};

export default ProductDetails;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getProduct(id);

  return {
    title: data?.product?.title,
    description: data?.product?.subDescription,
    keywords: data?.product?.keywords,
  };
}

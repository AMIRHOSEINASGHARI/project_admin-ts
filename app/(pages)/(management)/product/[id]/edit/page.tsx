// actions
import { getProduct } from "@/actions/product";
// types
import { PageParams } from "@/types/pages";
// cmp
import EditProductPage from "@/components/pages/management/product/edit/EditProductPage";

const EditProduct = ({ params: { id } }: PageParams) => {
  return <EditProductPage id={id} />;
};

export default EditProduct;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getProduct(id);

  return {
    title: `Edit ${data?.product?.title}`,
    description: data?.product?.subDescription,
    keywords: data?.product?.keywords,
  };
}

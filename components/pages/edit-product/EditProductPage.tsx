// next
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product";
import ProductForm from "@/components/shared/ProductForm";

const EditProductPage = async ({ id }: { id: string }) => {
  const data = await getProduct(id);

  if (!data?.product) notFound();

  return (
    <ProductForm
      page="edit"
      product={JSON.parse(JSON.stringify(data?.product))}
    />
  );
};

export default EditProductPage;

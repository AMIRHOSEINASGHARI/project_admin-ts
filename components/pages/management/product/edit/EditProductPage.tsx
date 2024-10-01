// next
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product";
// constants
import { editProduct_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import ProductForm from "@/components/shared/ProductForm";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const EditProductPage = async ({ id }: { id: string }) => {
  const data = await getProduct(id);

  if (!data?.product) notFound();

  return (
    <>
      <PageHeading text="Edit" />
      <CustomBreadcrumb
        data={editProduct_page_breadcrumb_data}
        breadcrumbPage={data?.product?.title}
      />
      <ProductForm
        page="edit"
        product={JSON.parse(JSON.stringify(data?.product))}
      />
    </>
  );
};

export default EditProductPage;

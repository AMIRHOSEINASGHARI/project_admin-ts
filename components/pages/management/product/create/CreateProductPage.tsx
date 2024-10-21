// constants
import { addProduct_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProductForm from "@/components/shared/ProductForm";

const CreateProductPage = () => {
  return (
    <>
      <PageHeading text="Create a new product" />
      <CustomBreadcrumb
        data={addProduct_page_breadcrumb_data}
        breadcrumbPage="Create"
      />
      <ProductForm type="create" />
    </>
  );
};

export default CreateProductPage;

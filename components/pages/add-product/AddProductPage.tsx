import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProductForm from "@/components/shared/ProductForm";
import { addProduct_page_breadcrumb_data } from "@/constants/breadcrumbs";

const AddProductPage = () => {
  return (
    <>
      <PageHeading text="Create a new product" />
      <CustomBreadcrumb
        data={addProduct_page_breadcrumb_data}
        breadcrumbPage="New product"
      />
      <ProductForm page="add" />
    </>
  );
};

export default AddProductPage;

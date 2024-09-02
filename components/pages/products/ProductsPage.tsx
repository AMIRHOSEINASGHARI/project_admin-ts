// constants
import { products_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const ProductsPage = () => {
  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={products_page_breadcrumb_data}
        breadcrumbPage="List"
      />
    </>
  );
};

export default ProductsPage;

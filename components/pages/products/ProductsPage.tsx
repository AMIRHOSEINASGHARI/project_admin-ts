// actions
import { getProducts } from "@/actions/product";
// types
import { PageSearchParams } from "@/types/shared";
// constants
import { products_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProductsList from "./ui/ProductsList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) => {
  const data = await getProducts(searchParams);

  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={products_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <ProductsList products={data?.products} />
    </>
  );
};

export default ProductsPage;

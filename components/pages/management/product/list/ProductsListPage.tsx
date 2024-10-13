// next
import Link from "next/link";
// actions
import { getProducts } from "@/actions/product";
// types
import { PageSearchParams } from "@/types/components";
// constants
import { products_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProductsList from "./ui/ProductsList";
// icons
import { PlusRegular, SolareExportBoldDuotone } from "@/components/svg";

const ProductsListPage = async ({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) => {
  const data = await getProducts(searchParams);

  // TODO: Exporting products functionality

  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={products_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <div className="flex items-center gap-3 justify-end w-full mb-3">
        <Button variant="outline" className="gap-2 h-[36px]">
          <SolareExportBoldDuotone className="text-icon-size text-black dark:text-white" />
          Export
        </Button>
        <Button asChild>
          <Link href="/add-product" className="gap-2">
            <PlusRegular />
            New product
          </Link>
        </Button>
      </div>
      <ProductsList products={data?.products} />
    </>
  );
};

export default ProductsListPage;

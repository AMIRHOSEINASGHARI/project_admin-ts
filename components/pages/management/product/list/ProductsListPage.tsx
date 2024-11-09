// next
import Link from "next/link";
// types
import { ProductsListParams } from "@/types/product";
// constants
import { products_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ProductsList from "./ui/ProductsList";
// icons
import { PlusRegular, SolareExportBoldDuotone } from "@/components/svg";

const ProductsListPage = ({
  searchParams,
}: {
  searchParams: Promise<ProductsListParams>;
}) => {
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
      <ProductsList searchParams={searchParams} />
    </>
  );
};

export default ProductsListPage;

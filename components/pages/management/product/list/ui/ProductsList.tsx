// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/components";
// cmp
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilteringProducts from "./FilteringProducts";
import PaginationProducts from "./PaginationProducts";
import ProductsListTable from "./ProductsListTable";
import LoaderBar from "@/components/shared/LoaderBar";

const ProductsList = async (props: {
  searchParams: Promise<ProductsListParams>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const page = searchParams?.page || "";
  const category = searchParams?.category || "";
  const stock = searchParams?.stock || "";
  const published = searchParams?.published || "";
  const discount = searchParams?.discount || "";

  const tableHeads = [
    "Product",
    "Created at",
    "Stock",
    "Price",
    "Publish",
    "Discount",
    "Orders",
    "",
  ];

  return (
    <div className="tableContainer">
      <FilteringProducts />
      <Table className="border-b border-dashed border-border-light dark:border-border-dark">
        <TableHeader>
          <TableRow className="border-none">
            {tableHeads.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <Suspense
            key={search + page + category + stock + published + discount}
            fallback={
              <TableRow>
                <TableCell
                  colSpan={tableHeads.length}
                  className="px-[10vw] py-[10vh] hover:bg-transparent dark:hover:bg-transparent"
                >
                  <LoaderBar />
                </TableCell>
              </TableRow>
            }
          >
            <ProductsListTable searchParams={searchParams} />
          </Suspense>
        </TableBody>
      </Table>
      <PaginationProducts />
    </div>
  );
};

export default ProductsList;

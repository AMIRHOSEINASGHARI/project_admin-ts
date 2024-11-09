// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/product";
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
      <Table>
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
              <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                <TableCell
                  colSpan={tableHeads.length}
                  className="px-[10vw] py-[10vh]"
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
      {/* <PaginationProducts /> */}
    </div>
  );
};

export default ProductsList;

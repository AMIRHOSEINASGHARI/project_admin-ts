// types
import { ProductType } from "@/types/product";
// cmp
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductsList = ({ products }: { products: ProductType[] }) => {
  const tableHeads = [
    "Product",
    "Created at",
    "Stock",
    "Price",
    "Publish",
    "Discount",
    "Orders",
    "Status",
    "",
  ];

  return <div className="tableContainer">ProductsList</div>;
};

export default ProductsList;

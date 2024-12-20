// next
import Image from "next/image";
import Link from "next/link";
// actions
import { getProducts } from "@/actions/product";
// types
import { ProductsListParams } from "@/types/product";
// cmp
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TableCell, TableRow } from "@/components/ui/table";
import moment from "moment";
import ProductTableActions from "./ProductTableActions";
import NoData from "@/components/shared/NoData";

const ProductsListTable = async ({
  searchParams,
}: {
  searchParams: ProductsListParams;
}) => {
  const data = await getProducts(searchParams);

  if (data?.products?.length === 0) {
    return (
      <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
        <TableCell colSpan={8} className="p-10">
          <NoData title="No products found!" />
        </TableCell>
      </TableRow>
    );
  }

  const tableRows = data?.products?.map((product) => {
    const stock =
      product?.stock > 10
        ? {
            text: `${product?.stock} in stock`,
            color: "bg-green-500 dark:bg-green-500",
          }
        : product?.stock <= 10 && product?.stock > 0
        ? {
            text: `${product?.stock} low stock`,
            color: "bg-orange-500 dark:bg-orange-500",
          }
        : {
            text: "out of stock",
            color: "bg-red-500 dark:bg-red-500",
          };

    return {
      key: product?._id,
      product: (
        <Link
          className="flex items-center gap-4 overflow-hidden"
          href={`/product/${product?._id}`}
        >
          <div className="w-[64px] h-[64px] rounded-product overflow-hidden">
            <Image
              src={product?.images[0]}
              width={100}
              height={100}
              alt="image"
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden flex flex-col">
            <p className="truncate">{product?.title}</p>
            <span className="capitalize table_sub_text">
              {product?.category}
            </span>
          </div>
        </Link>
      ),
      createdAt: (
        <div className="flex flex-col">
          <span>{moment(product?.createdAt).format("LL")}</span>
          <span className="table_sub_text">
            {moment(product?.createdAt).format("LT")}
          </span>
        </div>
      ),
      stock: (
        <div className="flex flex-col gap-2">
          <Progress
            value={product?.stock}
            max={300}
            className={stock.color}
            rootClassName={`${stock.color} bg-opacity-20 dark:bg-opacity-30 h-[6px] w-[70px]`}
          />
          <span className="table_sub_text">{stock.text}</span>
        </div>
      ),
      price: <span>${product?.price?.toLocaleString()}</span>,
      publish: (
        <Badge variant={product?.published ? "blue" : "gray"}>
          {product?.published ? "Published" : "Draft"}
        </Badge>
      ),
      discount: product?.discount ? `%${product?.discount}` : "_",
      orders: product?.orders?.length?.toLocaleString(),
      actions: <ProductTableActions id={product?._id} />,
    };
  });

  return (
    <>
      {tableRows.map((item) => (
        <TableRow key={item.key}>
          <TableCell className="min-w-[300px]">{item.product}</TableCell>
          <TableCell className="min-w-[180px]">{item.createdAt}</TableCell>
          <TableCell className="min-w-[100px] max-w-[110px]">
            {item.stock}
          </TableCell>
          <TableCell className="min-w-[100px] max-w-[110px]">
            {item.price}
          </TableCell>
          <TableCell className="min-w-[100px] max-w-[110px]">
            {item.publish}
          </TableCell>
          <TableCell className="min-w-[100px] max-w-[110px]">
            {item.discount}
          </TableCell>
          <TableCell className="w-[50px]">{item.orders}</TableCell>
          <TableCell className="w-[50px]">{item.actions}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ProductsListTable;

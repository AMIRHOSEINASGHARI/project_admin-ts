// next
import Link from "next/link";
import Image from "next/image";
// types
import { OrderItemType, OrderSummaryType } from "@/types/order";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
// icons
import { SolarPenBoldDuotone } from "@/components/svg";

type DetailsProps = {
  items: OrderItemType[];
  summary: OrderSummaryType;
};

const Details = ({ items, summary }: DetailsProps) => {
  const tableRows = items?.map((item: OrderItemType) => ({
    key: item?._id,
    product: (
      <div className="flex items-center gap-4 w-[400px]">
        <Image
          src={item?.productId?.image}
          width={100}
          height={100}
          alt="product"
          priority
          className="rounded-xl w-[50px] h-[50px]"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="truncate text-small">{item?.productId?.title}</p>
          <Link
            className="text-[var(--text-disabled)] text-small w-fit hover:underline font-light"
            href={`/products/${item?.productId?._id}`}
          >
            #{shorterText(item?.productId?._id, 8, false)}
          </Link>
        </div>
      </div>
    ),
    quantity: <span>&#10005;{item?.quantity}</span>,
    cost: <span className="font-semibold">${item?.cost}</span>,
  }));

  return (
    <Card
      className="w-full space-y-[20px]"
      style={{
        padding: 0,
      }}
    >
      <div className="flex items-center justify-between pt-card px-card">
        <CardTitle>Details</CardTitle>
        <Button variant="icon">
          <SolarPenBoldDuotone />
        </Button>
      </div>
      <Table className="sidebarScroll">
        <TableBody className="border-b border-light3 dark:border-dark3 border-dashed">
          {tableRows?.map((item) => (
            <TableRow
              key={item.key}
              className="hover:bg-transparent dark:hover:bg-transparent border-light3 dark:border-dark3 border-dashed"
            >
              <TableCell className="w-[300px] px-card py-7">
                {item.product}
              </TableCell>
              <TableCell className="min-w-[100px] text-right py-7">
                {item.quantity}
              </TableCell>
              <TableCell className="min-w-[100px] text-right px-card py-7">
                {item.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-end pb-card px-card">
        <div className="space-y-4 min-w-[200px]">
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-[var(--text-disabled)] text-right">
              Subtotal
            </span>
            <span className="text-sm font-semibold text-right">
              ${summary.totalPrice}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-[var(--text-disabled)] text-right">
              Shipping
            </span>
            <span className="text-sm font-semibold text-right text-error-dark dark:text-error-light">
              -$0
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-[var(--text-disabled)] text-right">
              Discount
            </span>
            <span className="text-sm font-semibold text-right text-error-dark dark:text-error-light">
              -${summary.totalDiscount}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-[var(--text-disabled)] text-right">
              Taxes
            </span>
            <span className="text-sm font-semibold text-right">$0</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-right">Total</span>
            <span className="font-semibold text-right">
              -${summary.totalPayable}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Details;

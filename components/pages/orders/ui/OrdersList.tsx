"use client";

// react
import { Fragment, useState } from "react";
// next
import Image from "next/image";
import Link from "next/link";
// constants
import { images } from "@/constants";
// types
import { OrderItemType, OrderSummaryType, OrderType } from "@/types/order";
import { OrdersTableRowType } from "@/types/tables";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import OrdersTabs from "./OrdersTabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// icons
import {
  SolarAltArrowDownLineDuotone,
  SolarAltArrowUpLineDuotone,
  SolarOverflowMenuVertical,
} from "@/components/svg";

const OrdersList = ({ orders }: { orders: OrderType[] }) => {
  const [rowMoreDetails, setRowMoreDetails] = useState<{
    data: null | OrderItemType[];
    show: boolean;
    id: string | null;
  }>({ data: null, show: false, id: null });

  const tableHeads = ["Order", "User", "Date", "Items", "Price", "Status", ""];

  const showHandler = (order: OrderType) => {
    if (order?._id === rowMoreDetails?.id) {
      setRowMoreDetails(() => ({ data: null, show: false, id: null }));
      return;
    }

    if (rowMoreDetails.show) {
      setRowMoreDetails(() => ({ data: null, show: false, id: null }));
    }

    setRowMoreDetails(() => ({
      show: true,
      data: order?.items,
      id: order?._id,
    }));
  };

  const tableRows: OrdersTableRowType[] = orders?.map(
    (order: OrderType, index) => ({
      key: order?._id.toString(),
      order: (
        <Link href={`/orders/${order?._id}`} className="underline">
          #{shorterText(order?._id, 5, false)}
        </Link>
      ),
      user: (
        <div className="flex items-center gap-4">
          <Image
            src={
              order?.userId?.avatar ||
              `/images/avatars/avatar_${index + 1}.jpg` ||
              images.person
            }
            width={100}
            height={100}
            alt="user"
            priority
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-small">{order?.userId?.username}</span>
            {order?.userId?.displayName && (
              <span className="text-small text-slate-500 font-light">
                {order?.userId?.displayName}
              </span>
            )}
          </div>
        </div>
      ),
      date: (
        <div className="flex flex-col">
          <span className="text-small">
            {moment(order?.createdAt).format("ll")}
          </span>
          <span className="text-x-small text-slate-500 font-light">
            {moment(order?.createdAt).format("LT")}
          </span>
        </div>
      ),
      items: order?.summary?.totalProducts,
      price: order.summary?.totalPayable,
      status: (
        <Badge variant={order?.status === "Completed" ? "green" : "orange"}>
          {order?.status}
        </Badge>
      ),
      actions: (
        <div className="flex items-center gap-1">
          <Button
            variant="icon"
            className="text-[20px]"
            onClick={() => showHandler(order)}
          >
            {rowMoreDetails.show && order?._id === rowMoreDetails?.id ? (
              <SolarAltArrowUpLineDuotone />
            ) : (
              <SolarAltArrowDownLineDuotone />
            )}
          </Button>
          <Button variant="icon" className="text-[20px]">
            <SolarOverflowMenuVertical />
          </Button>
        </div>
      ),
    })
  );

  return (
    <div className="tableContainer">
      <OrdersTabs orders={orders} />
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeads.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows?.map((item) => (
            <Fragment key={item.key}>
              <TableRow>
                <TableCell className="w-[100px]">{item.order}</TableCell>
                <TableCell className="min-w-[260px]">{item.user}</TableCell>
                <TableCell className="min-w-[150px]">{item.date}</TableCell>
                <TableCell className="min-w-[100px]">{item.items}</TableCell>
                <TableCell className="min-w-[100px]">
                  ${item.price?.toLocaleString()}
                </TableCell>
                <TableCell className="w-[60px]">{item.status}</TableCell>
                <TableCell className="w-[50px]">{item.actions}</TableCell>
              </TableRow>
              {rowMoreDetails?.show && rowMoreDetails?.id === item?.key && (
                <TableRow className="bg-light2 dark:bg-dark3">
                  <TableCell colSpan={tableRows?.length}>
                    <div className="rounded-xl overflow-hidden flex flex-col gap-0.5">
                      {rowMoreDetails?.data?.map((item) => (
                        <div
                          key={item?._id}
                          className="bg-white dark:bg-dark2 p-3 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={item?.productId?.image}
                              width={100}
                              height={100}
                              alt="product"
                              priority
                              className="w-[45px] h-[45px]"
                            />
                            <div className="flex flex-col">
                              <p className="truncate">
                                {item?.productId?.title}
                              </p>
                              <Link
                                href={`/products/${item?.productId?._id}`}
                                className="text-slate-500 w-fit underline font-light"
                                target="_blank"
                              >
                                #{shorterText(item?.productId?._id, 7, false)}
                              </Link>
                            </div>
                          </div>
                          <div className="w-[150px] flex items-center justify-between">
                            <span>&#10005;{item?.quantity}</span>
                            <span>${item?.cost}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersList;

// next
import { Metadata } from "next";
// types
import { OrdersListParams } from "@/types/order";
// cmp
import OrdersListPage from "@/components/pages/management/order/list/OrdersListPage";

export const metadata: Metadata = {
  title: "Orders list",
};

const OrdersList = ({
  searchParams,
}: {
  searchParams: Promise<OrdersListParams>;
}) => {
  return <OrdersListPage searchParams={searchParams} />;
};

export default OrdersList;

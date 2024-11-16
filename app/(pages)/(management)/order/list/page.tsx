// next
import { Metadata } from "next";
// cmp
import OrdersListPage from "@/components/pages/management/order/list/OrdersListPage";

export const metadata: Metadata = {
  title: "Orders list",
};

const OrdersList = () => {
  return <OrdersListPage />;
};

export default OrdersList;

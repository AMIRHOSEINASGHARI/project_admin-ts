// actions
import { getOrders } from "@/actions/order";
// types
import { OrdersListParams } from "@/types/order";
// utils
import { jsonParser } from "@/utils/functions";
// cmp
import OrdersList from "./OrdersList";

const OrdersTable = async ({
  searchParams,
}: {
  searchParams: OrdersListParams;
}) => {
  const data = await getOrders(searchParams);

  return <OrdersList orders={jsonParser(data?.orders)} />;
};

export default OrdersTable;

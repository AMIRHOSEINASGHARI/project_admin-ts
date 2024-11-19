// actions
import { getOrders } from "@/actions/order";
// utils
import { jsonParser } from "@/utils/functions";
// cmp
import OrdersList from "./OrdersList";

const OrdersTable = async () => {
  const data = await getOrders();

  return <OrdersList orders={jsonParser(data?.orders)} />;
};

export default OrdersTable;

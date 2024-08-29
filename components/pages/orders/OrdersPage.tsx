// actions
import { getOrders } from "@/actions/order";
// constants
import { orders_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import OrdersList from "./ui/OrdersList";

const OrdersPage = async () => {
  const data = await getOrders();

  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={orders_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <OrdersList orders={JSON.parse(JSON.stringify(data?.orders))} />
    </>
  );
};

export default OrdersPage;

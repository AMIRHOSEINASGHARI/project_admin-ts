// react
import { Suspense } from "react";
// constants
import { orders_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import SuspenseFallback from "@/components/shared/SuspenseFallback";
import OrdersTable from "./ui/OrdersTable";
import FilteringOrders from "./ui/FilteringOrders";

const OrdersListPage = async () => {
  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={orders_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <div className="tableContainer">
        <FilteringOrders />
        <Suspense fallback={<SuspenseFallback />}>
          <OrdersTable />
        </Suspense>
      </div>
    </>
  );
};

export default OrdersListPage;

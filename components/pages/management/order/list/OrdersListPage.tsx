// react
import { Suspense } from "react";
// types
import { OrdersListParams } from "@/types/order";
// constants
import { orders_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import SuspenseFallback from "@/components/shared/SuspenseFallback";
import OrdersTable from "./ui/OrdersTable";
import FilteringOrders from "./ui/FilteringOrders";

const OrdersListPage = async (props: {
  searchParams: Promise<OrdersListParams>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const status = searchParams?.status || "";
  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";

  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={orders_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <div className="tableContainer">
        <FilteringOrders />
        <Suspense
          key={search + status + startDate + endDate}
          fallback={<SuspenseFallback />}
        >
          <OrdersTable searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default OrdersListPage;

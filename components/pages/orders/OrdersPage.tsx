// constants
import { orders_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const OrdersPage = () => {
  return (
    <div>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={orders_page_breadcrumb_data}
        breadcrumbPage="List"
      />
    </div>
  );
};

export default OrdersPage;

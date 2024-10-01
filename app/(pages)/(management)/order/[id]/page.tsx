// types
import { PageParams } from "@/types/pages";
// cmp
import OrderDetailsPage from "@/components/pages/management/order/details/OrderDetailsPage";

const OrderDetails = ({ params: { id } }: PageParams) => {
  return <OrderDetailsPage id={id} />;
};

export default OrderDetails;

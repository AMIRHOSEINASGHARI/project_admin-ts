// types
import { PageParams } from "@/types/pages";
// cmp
import OrderDetailsPage from "@/components/pages/order/OrderDetailsPage";

const OrderDetails = ({ params: { id } }: PageParams) => {
  return <OrderDetailsPage id={id} />;
};

export default OrderDetails;

// cmp
import OrderDetailsPage from "@/components/pages/order/OrderDetailsPage";

const OrderDetails = ({ params }: { params: { id: string } }) => {
  return <OrderDetailsPage id={params.id} />;
};

export default OrderDetails;

// actions
import { getOrder } from "@/actions/order";
// types
import { PageParams } from "@/types/pages";
// cmp
import OrderDetailsPage from "@/components/pages/management/order/details/OrderDetailsPage";

const OrderDetails = ({ params: { id } }: PageParams) => {
  return <OrderDetailsPage id={id} />;
};

export default OrderDetails;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getOrder(id);

  return {
    title: data?.order?._id,
  };
}

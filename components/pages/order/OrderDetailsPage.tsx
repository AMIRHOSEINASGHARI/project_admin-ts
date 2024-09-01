// next
import { notFound } from "next/navigation";
// actions
import { getOrder } from "@/actions/order";
// cmp
import Heading from "./ui/Heading";
import HeadingActions from "./ui/HeadingActions";

const OrderDetailsPage = async ({ id }: { id: string }) => {
  const data = await getOrder(id);

  if (data?.order === null) notFound();

  return (
    <>
      <Heading
        id={id}
        status={data?.order?.status}
        createdAt={data?.order?.createdAt}
      />
      <HeadingActions
        id={JSON.parse(JSON.stringify(id))}
        status={JSON.parse(JSON.stringify(data?.order?.status))}
      />
    </>
  );
};

export default OrderDetailsPage;

// next
import { notFound } from "next/navigation";
// actions
import { getOrder } from "@/actions/order";
// utils
import { jsonParser } from "@/utils/functions";
// cmp
import Heading from "./ui/Heading";
import HeadingActions from "./ui/HeadingActions";
import View from "@/components/shared/layout/View";
import Details from "./ui/Details";
import OrderHistory from "./ui/OrderHistory";
import OtherInformation from "./ui/OtherInformation";

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
        id={jsonParser(id)}
        status={jsonParser(data?.order?.status)}
      />
      <View variant="flex-gap">
        <View orientation="vertical" className="w-full xl:w-[65%]">
          <Details items={data?.order?.items} summary={data?.order?.summary} />
          <OrderHistory />
        </View>
        <div className="w-full xl:w-[35%]">
          <OtherInformation
            userAvatar={data?.order?.userId?.avatar}
            username={data?.order?.userId?.username}
            displayName={data?.order?.userId?.displayName}
            deliveryAddress={data?.order?.deliveryAddress}
            paymentMethod={data?.order?.paymentMethod}
            phoneNumber={data?.order?.phoneNumber}
          />
        </div>
      </View>
    </>
  );
};

export default OrderDetailsPage;

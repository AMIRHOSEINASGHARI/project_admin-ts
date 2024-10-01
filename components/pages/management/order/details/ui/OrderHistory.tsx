// cmp
import CustomHistory from "@/components/shared/CustomHistory";
import View from "@/components/shared/layout/View";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const OrderHistory = () => {
  // TODO: maki this dynamic in the database
  const history_data = [
    {
      title: "Order has been created",
      subTitle: "27 Aug 2024 11:55 pm",
    },
    {
      title: "The shipping unit has picked up the goods",
      subTitle: "29 Aug 2024 12:55 am",
    },
    {
      title: "Transporting to [1]",
      subTitle: "30 Aug 2024 1:55 am",
    },
    {
      title: "Transporting to [2]",
      subTitle: "31 Aug 2024 2:55 am",
    },
    {
      title: "Delivery successful",
      subTitle: "01 Sep 2024 3:55 am",
    },
  ];

  const other_data = [
    {
      title: "Order time",
      subTitle: "01 Sep 2024 3:55 am",
    },
    {
      title: "Payment time",
      subTitle: "01 Sep 2024 3:55 am",
    },
    {
      title: "Delivery time for the carrier",
      subTitle: "01 Sep 2024 3:55 am",
    },
    {
      title: "Completion time",
      subTitle: "01 Sep 2024 3:55 am",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="mb-8">
        <CardTitle>History</CardTitle>
      </CardHeader>
      <View variant="flex-gap" className="w-full">
        <CustomHistory data={history_data} />
        <div className="flex flex-col gap-4 h-fit w-full xl:w-[60%] border border-slate-100 dark:border-dark3 p-card rounded-card">
          {other_data.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <span className="text-small text-[var(--text-disabled)]">
                {item.title}
              </span>
              <span className="text-small">{item.subTitle}</span>
            </div>
          ))}
        </div>
      </View>
    </Card>
  );
};

export default OrderHistory;

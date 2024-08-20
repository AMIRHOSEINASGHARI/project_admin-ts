// cmp
import View from "@/components/shared/layout/View";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const CurrentBalance = () => {
  const data = [
    {
      title: "Order total",
      value: 287650,
    },
    {
      title: "Earning",
      value: 25500,
    },
    {
      title: "Refunded",
      value: 1600,
    },
  ];

  return (
    <Card className="xl:w-[40%] space-y-4">
      <CardHeader className="pb-0">
        <CardTitle className="line-clamp-none">Current balance</CardTitle>
      </CardHeader>
      <h1 className="font-extrabold text-x-large">$187,650</h1>
      {data.map((item) => (
        <div key={item.title} className="flex items-center justify-between">
          <span className="text-sm text-slate-400">{item.title}</span>
          <span className="text-sm font-light">
            ${item.value.toLocaleString()}
          </span>
        </div>
      ))}
      <View className="flex items-center gap-4">
        <Button variant="ghost" className="w-full font-medium bg-theme-yellow">
          Request
        </Button>
        <Button
          variant="ghost"
          className="w-full font-medium bg-primary-1 text-white"
        >
          Transfer
        </Button>
      </View>
    </Card>
  );
};

export default CurrentBalance;

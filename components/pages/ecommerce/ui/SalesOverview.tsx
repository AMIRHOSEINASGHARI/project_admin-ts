// constants
import { salesOverview_data } from "@/constants/charts";
// cmp
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SalesOverview = () => {
  return (
    <Card className="w-full h-fit">
      <CardHeader className="pb-0">
        <CardTitle>Sales overview</CardTitle>
      </CardHeader>
      <div className="w-full space-y-5">
        {salesOverview_data.map((item) => (
          <div key={item.title} className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-small font-semibold">{item.title}</span>
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold">
                  ${item.value.toLocaleString()}
                </span>
                <span className="text-base text-slate-400">
                  ({((item.value / item.max) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
            <Progress
              value={(item.value / item.max) * 100}
              className={item.color}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SalesOverview;

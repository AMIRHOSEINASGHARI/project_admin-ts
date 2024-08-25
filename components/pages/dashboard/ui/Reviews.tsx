"use client";

// constants
import { dashboardReviews_chartData } from "@/constants/charts";
// cmp
import { Card } from "@/components/ui/card";
import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// icons
import {
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
  SolarDoubleAltArrowDownBoldDuotone,
  SolarDoubleAltArrowUpBoldDuotone,
} from "@/components/svg";
import View from "@/components/shared/layout/View";

const Reviews = () => {
  return (
    <View className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {dashboardReviews_chartData.map((el, i) => {
        const { title, count, profit, chartData, chartColor } = el;

        const chartConfig = {
          performance: {
            label: "Performance",
            color: chartColor,
          },
        } satisfies ChartConfig;

        return (
          <Card key={i}>
            <div className="w-full">
              <span className="text-small">{title}</span>
              <div className="flex justify-between w-full mt-5">
                <div>
                  <span className="text-large font-black">
                    {count.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1 mt-2 text-small">
                    <div
                      className={profit > 0 ? "text-green-500" : "text-red-500"}
                    >
                      {profit > 0 ? (
                        <SolarDoubleAltArrowUpBoldDuotone className="text-icon-size" />
                      ) : (
                        <SolarDoubleAltArrowDownBoldDuotone className="text-icon-size" />
                      )}
                    </div>
                    <span
                      className={profit > 0 ? "text-green-500" : "text-red-500"}
                    >
                      {profit}%
                    </span>
                    <span className="font-light">last month</span>
                  </div>
                </div>
                <ChartContainer
                  config={chartConfig}
                  className="min-h-[40px] min-w-[70px]"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <Bar
                      dataKey="performance"
                      fill="var(--color-performance)"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </Card>
        );
      })}
    </View>
  );
};

export default Reviews;

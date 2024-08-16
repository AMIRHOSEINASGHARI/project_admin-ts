"use client";

// constants
import { dashboardReviews } from "@/constants";
// cmp
import { Card } from "@/components/ui/card";
import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// icons
import { ArrowTrendDownRegular, ArrowTrendUpRegular } from "@/components/svg";

const Reviews = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {dashboardReviews.map((el, i) => {
        const { title, count, profit, chartData } = el;

        const color = profit >= 0 ? "#047857" : "#b91c1c";
        const chartConfig = {
          performance: {
            label: "Performance",
            color,
          },
        } satisfies ChartConfig;

        return (
          <Card key={i} className="flex flex-1 min-w-[300px]">
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
                        <ArrowTrendUpRegular />
                      ) : (
                        <ArrowTrendDownRegular />
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
                  className="min-h-[40px] min-w-[100px]"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <Bar
                      dataKey="performance"
                      fill="var(--color-performance)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Reviews;

"use client";

// cmp
import { ArrowTrendUpRegular } from "@/components/svg";
import { Card } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", income: 10 },
  { month: "February", income: 41 },
  { month: "March", income: 80 },
  { month: "April", income: 100 },
  { month: "May", income: 60 },
  { month: "June", income: 120 },
  { month: "July", income: 69 },
  { month: "August", income: 91 },
  { month: "September", income: 160 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--primary-5)",
  },
} satisfies ChartConfig;

const TotalIncomes = () => {
  return (
    <Card className="bg-light2 dark:bg-dark3 p-3">
      <div className="flex flex-col xl:flex-row rounded-xl w-full bg-white dark:bg-dark2 p-3 gap-3">
        <div className="w-full p-5 bg-primary-2 rounded-xl flex flex-col gap-10">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col gap-3 text-primary-4 dark:text-primary-4">
              <span className="text-small">Total incomes</span>
              <span className="bold-value">$18,765</span>
            </div>
            <div className="text-primary-4 dark:text-primary-4">
              <div className="flex items-center gap-1">
                <ArrowTrendUpRegular />
                <span>+2.6%</span>
              </div>
              <span className="text-small">last month</span>
            </div>
          </div>
          <ChartComponent />
        </div>
        <div className="w-full">right</div>
      </div>
      <div className="flex flex-col xl:flex-row rounded-xl w-full bg-white dark:bg-dark2 p-3">
        <div className="w-full">left</div>
        <div className="w-full">right</div>
      </div>
    </Card>
  );
};

export default TotalIncomes;

const ChartComponent = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[100px] w-full">
        <LineChart accessibilityLayer data={chartData}>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="p-0 rounded-xl overflow-hidden"
                color="var(--primary-1)"
                hideLabel
                formatter={(value, _, entry) => {
                  return (
                    <div className="flex flex-col w-full p-0 items-center justify-center text-xs text-muted-foreground">
                      <div className="bg-gray-100 dark:bg-dark3 font-medium w-full py-2 text-center">
                        {entry.payload.month}
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: "var(--primary-1)" }}
                        />
                        <span>${value}</span>
                      </div>
                    </div>
                  );
                }}
              />
            }
            cursor={false}
          />
          <Line
            dataKey="income"
            type="monotone"
            stroke="var(--color-income)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card } from "@/components/ui/card";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 186, mobile: 80 },
  { month: "July", desktop: 305, mobile: 120 },
  { month: "August", desktop: 214, mobile: 140 },
  { month: "September", desktop: 100, mobile: 150 },
  { month: "October", desktop: 214, mobile: 140 },
  { month: "November", desktop: 300, mobile: 120 },
  { month: "December", desktop: 150, mobile: 70 },
];

const RevenueCompare = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-desktop)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  //   TODO: bug in tooltip color

  return (
    <Card>
      <div className="space-y-5">
        <div>
          <h1 className="heading1">Users</h1>
          <span className="subheading">(+43%) than last year</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary-dark rounded-full w-4 h-4" />
            <span className="text-small">Desktop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary-dark rounded-full w-4 h-4" />
            <span className="text-small">Mobile</span>
          </div>
        </div>
      </div>
      <ChartContainer
        config={chartConfig}
        className="lg:max-h-[300px] max-lg:h-[400px] w-full mt-8"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid
            vertical={false}
            className="stroke-light3 dark:stroke-dark3"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            stackId="a"
            className="fill-primary-dark"
            radius={[0, 0, 8, 8]}
          />
          <Bar
            dataKey="mobile"
            stackId="a"
            className="fill-secondary-dark"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default RevenueCompare;

"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const UsersCompare = () => {
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
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className="lg:max-h-[300px] max-lg:h-[400px] w-full"
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
            className="fill-primary-high-dark"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default UsersCompare;

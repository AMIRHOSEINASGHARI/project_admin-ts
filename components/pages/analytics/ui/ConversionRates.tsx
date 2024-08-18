"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Italy", desktop: 44, mobile: 53 },
  { month: "Japan", desktop: 55, mobile: 32 },
  { month: "China", desktop: 41, mobile: 33 },
  { month: "Canada", desktop: 64, mobile: 52 },
  { month: "France", desktop: 22, mobile: 13 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const ConversionRates = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Conversion rates</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="lg:max-h-[300px] max-lg:h-[400px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 5,
            }}
          >
            <XAxis
              type="number"
              dataKey="desktop"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              className="fill-primary-dark"
              radius={[0, 4, 4, 0]}
            />
            <Bar
              dataKey="mobile"
              className="fill-primary-high-dark"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ConversionRates;

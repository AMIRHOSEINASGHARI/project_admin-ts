"use client";

// react
import * as React from "react";
// cmp
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";

const chartData = [
  { category: "phone", revenue: 275, fill: "var(--color-phone)" },
  { category: "laptop", revenue: 200, fill: "var(--color-laptop)" },
  { category: "tv", revenue: 287, fill: "var(--color-tv)" },
  { category: "headphone", revenue: 173, fill: "var(--color-headphone)" },
  { category: "other", revenue: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  revenue: {
    label: "revenue",
  },
  phone: {
    label: "phone",
    color: "var(--chart-1)",
  },
  laptop: {
    label: "laptop",
    color: "var(--chart-2)",
  },
  tv: {
    label: "tv",
    color: "var(--chart-3)",
  },
  headphone: {
    label: "headphone",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const RevenuePieChart = () => {
  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0);
  }, []);

  return (
    <Card className="flex flex-col xl:w-[33%] w-full">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[230px] max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="revenue"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-dark1 dark:fill-light3 text-3xl font-bold"
                        >
                          {totalRevenue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-dark1 dark:fill-light3"
                        >
                          Revenue
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="flex-wrap gap-2 [&>*]:justify-center border-t dark:border-dark3"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default RevenuePieChart;

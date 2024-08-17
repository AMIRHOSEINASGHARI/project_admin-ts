"use client";

// react
import * as React from "react";
// cmp
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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
    <Card className="flex flex-col h-fit">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground flex flex-col text-center gap-2">
          Showing total revenue for the last 6 months
          <span>(Thosand dollars)</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RevenuePieChart;

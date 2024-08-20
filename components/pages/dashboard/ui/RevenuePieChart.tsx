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
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  revenuePieChart_chartConfig,
  revenuePieChart_chartData,
} from "@/constants/charts";

const RevenuePieChart = () => {
  const totalRevenue = React.useMemo(() => {
    return revenuePieChart_chartData.reduce(
      (acc, curr) => acc + curr.revenue,
      0
    );
  }, []);

  return (
    <Card className="flex flex-col xl:w-[33%] w-full">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={revenuePieChart_chartConfig}
          className="mx-auto aspect-square min-h-[230px] max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={revenuePieChart_chartData}
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

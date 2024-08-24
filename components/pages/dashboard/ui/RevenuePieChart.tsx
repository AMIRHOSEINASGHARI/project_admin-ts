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
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";
import clsx from "clsx";

const RevenuePieChart = () => {
  const totalRevenue = React.useMemo(() => {
    return revenuePieChart_chartData.reduce(
      (acc, curr) => acc + curr.revenue,
      0
    );
  }, []);

  return (
    <Card className="xl:col-span-1 max-xl:w-full">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={revenuePieChart_chartConfig}
          className="mx-auto aspect-square min-h-[200px] w-full h-[400px]"
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
              innerRadius={70}
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
      <div className="flex items-center lg:justify-center flex-wrap gap-3">
        {Object.keys(revenuePieChart_chartConfig).map((item) => (
          <div key={item} className="capitalize">
            <ChartBadgeColor
              text={item}
              color={clsx({
                "bg-primary-1": item === "phone",
                "bg-primary-2": item === "laptop",
                "bg-primary-3": item === "tv",
                "bg-primary-4": item === "headphone",
                "bg-primary-5": item === "other",
              })}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RevenuePieChart;

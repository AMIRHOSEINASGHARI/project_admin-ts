"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  yearlySales_chartConfig,
  yearlySales_chartData,
} from "@/constants/charts";

const YearlySales = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Yearly sales</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={yearlySales_chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={yearlySales_chartData}>
            <defs>
              <linearGradient id="fillincome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="fillexpense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} className="chart-cartesian-grid" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expense"
              type="monotone"
              fill="url(#fillexpense)"
              stroke="var(--color-expense)"
              stackId="a"
              strokeWidth={2}
            />
            <Area
              dataKey="income"
              type="monotone"
              fill="url(#fillincome)"
              stroke="var(--color-income)"
              stackId="a"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default YearlySales;

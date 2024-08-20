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
import {
  websiteVisits_chartConfig,
  websiteVisits_chartData,
} from "@/constants/charts";

const WebsiteVisits = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Website visits</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <ChartContainer
        config={websiteVisits_chartConfig}
        className="lg:max-h-[300px] max-lg:h-[400px] w-full"
      >
        <BarChart accessibilityLayer data={websiteVisits_chartData}>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default WebsiteVisits;

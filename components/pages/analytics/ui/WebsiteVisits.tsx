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
      <div className="flex items-center justify-end gap-5 my-5">
        <div className="flex items-center gap-2">
          <div className="bg-primary-3 rounded-full w-3 h-3" />
          <span className="text-small font-medium">Desktop</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-theme-yellow rounded-full w-3 h-3" />
          <span className="text-small font-medium">Mobile</span>
        </div>
      </div>
      <ChartContainer
        config={websiteVisits_chartConfig}
        className="lg:max-h-[200px] max-lg:h-[400px] w-full"
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
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="mobile"
            fill="var(--color-mobile)"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default WebsiteVisits;

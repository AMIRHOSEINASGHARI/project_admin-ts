"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
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
// constatns
import {
  usersCompare_chartConfig,
  usersCompare_chartData,
} from "@/constants/charts";

const UsersCompare = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <ChartContainer
        config={usersCompare_chartConfig}
        className="lg:max-h-[300px] max-lg:h-[400px] w-full"
      >
        <BarChart accessibilityLayer data={usersCompare_chartData}>
          <CartesianGrid vertical={false} className="chart-cartesian-grid" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="asia"
            stackId="a"
            fill="var(--color-asia)"
            radius={0}
            barSize={25}
          />
          <Bar
            dataKey="europe"
            stackId="a"
            fill="var(--color-europe)"
            radius={0}
            barSize={25}
          />
          <Bar
            dataKey="america"
            stackId="a"
            fill="var(--color-america)"
            radius={[4, 4, 0, 0]}
            barSize={25}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default UsersCompare;

"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";

const UsersCompare = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <div className="flex items-center flex-wrap gap-5 my-5">
        <div className="flex flex-col gap-2">
          <ChartBadgeColor text="Asia" color="bg-primary-3" />
          <span className="font-semibold">1.23k</span>
        </div>
        <div className="flex flex-col gap-2">
          <ChartBadgeColor text="Europe" color="bg-[var(--chart-yellow)]" />
          <span className="font-semibold">6.79k</span>
        </div>
        <div className="flex flex-col gap-2">
          <ChartBadgeColor text="America" color="bg-[var(--chart-sky)]" />
          <span className="font-semibold">1.01k</span>
        </div>
      </div>
      <ChartContainer
        config={usersCompare_chartConfig}
        className="lg:max-h-[330px] max-lg:h-[400px] w-full"
      >
        <BarChart accessibilityLayer data={usersCompare_chartData}>
          <CartesianGrid vertical={false} className="chart-cartesian-grid" />
          <YAxis
            type="number"
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            width={30}
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

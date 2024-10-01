"use client";

// constants
import {
  filePage_dataActivity_chartConfig,
  filePage_dataActivity_chartData,
} from "@/constants/charts";
// cmp
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";

const DataActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-end flex-wrap gap-5 my-7">
          <ChartBadgeColor text="Images" color="bg-primary-1" />
          <ChartBadgeColor text="Media" color="bg-[var(--chart-rose)]" />
          <ChartBadgeColor text="Documents" color="bg-[var(--chart-amber)]" />
          <ChartBadgeColor text="Other" color="bg-[var(--ghost)]" />
        </div>
        <ChartContainer
          config={filePage_dataActivity_chartConfig}
          className="max-h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={filePage_dataActivity_chartData}>
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
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="images"
              stackId="a"
              fill="var(--color-images)"
              radius={[0, 0, 0, 0]}
              barSize={25}
            />
            <Bar
              dataKey="media"
              stackId="a"
              fill="var(--color-media)"
              radius={[0, 0, 0, 0]}
              barSize={25}
            />
            <Bar
              dataKey="documents"
              stackId="a"
              fill="var(--color-documents)"
              radius={[0, 0, 0, 0]}
              barSize={25}
            />
            <Bar
              dataKey="other"
              stackId="a"
              fill="var(--color-other)"
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DataActivity;

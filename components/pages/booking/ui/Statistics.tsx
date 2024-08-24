"use client";

// react
import { useState } from "react";
// types
import { ChartShowStatusType } from "@/types/shared";
// cmp
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  bookingpage_statistics_chartConfig,
  bookingpage_statistics_chartData,
} from "@/constants/charts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Statistics = () => {
  const [showStatus, setShowStatus] = useState<ChartShowStatusType>("Yearly");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <div className="flex justify-between flex-wrap gap-1 max-md:mb-5">
        <div className="flex items-center flex-wrap gap-5 my-5">
          <div className="flex flex-col gap-2">
            <ChartBadgeColor text="Sold" color="primary-3" />
            <span className="font-semibold">6.79k</span>
          </div>
          <div className="flex flex-col gap-2">
            <ChartBadgeColor text="Canceled" color="theme-yellow" />
            <span className="font-semibold">1.23k</span>
          </div>
        </div>
        <Select
          value={showStatus}
          onValueChange={(value: ChartShowStatusType) => setShowStatus(value)}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Weekly">Weekly</SelectItem>
            <SelectItem value="Monthly">Monthly</SelectItem>
            <SelectItem value="Yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CardContent>
        <ChartContainer
          config={bookingpage_statistics_chartConfig}
          className="max-h-[270px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={bookingpage_statistics_chartData(showStatus)}
          >
            <CartesianGrid vertical={false} className="chart-cartesian-grid" />
            <YAxis
              type="number"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              width={30}
            />
            <XAxis
              dataKey={
                showStatus === "Yearly"
                  ? "year"
                  : showStatus === "Monthly"
                  ? "month"
                  : "week"
              }
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                showStatus === "Yearly"
                  ? value.slice(0, 4)
                  : showStatus === "Monthly"
                  ? value.slice(0, 3)
                  : value.slice(0, 6)
              }
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Bar
              dataKey="sold"
              fill="var(--color-sold)"
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
            <Bar
              dataKey="canceled"
              fill="var(--color-canceled)"
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Statistics;

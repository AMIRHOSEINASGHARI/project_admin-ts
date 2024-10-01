"use client";

// react
import { useState } from "react";
// types
import { ChartShowStatusType } from "@/types/shared";
// cmp
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Line, LineChart, CartesianGrid, YAxis, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  coursePage_hoursSpent_chartConfig,
  coursePage_hoursSpent_chartData,
} from "@/constants/charts";

const HoursSpent = () => {
  const [showStatus, setShowStatus] = useState<ChartShowStatusType>("Yearly");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hours spent</CardTitle>
      </CardHeader>
      <div className="w-full justify-end flex my-5">
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
      <ChartContainer
        config={coursePage_hoursSpent_chartConfig}
        className="max-h-[270px] w-full"
      >
        <LineChart
          accessibilityLayer
          data={coursePage_hoursSpent_chartData(showStatus)}
        >
          <CartesianGrid vertical={false} className="chart-cartesian-grid" />
          <YAxis
            type="number"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            width={30}
            domain={
              showStatus === "Yearly"
                ? [20, 120]
                : showStatus === "Monthly"
                ? [70, 120]
                : [0, 250]
            }
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
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="p-0 rounded-xl overflow-hidden"
                hideLabel
                formatter={(value, _, entry) => {
                  return (
                    <div className="flex flex-col w-full p-0 items-center justify-center text-xs text-muted-foreground">
                      <div className="bg-gray-100 dark:bg-dark3 font-medium w-full py-2 text-center">
                        {showStatus === "Weekly" && entry.payload.week}
                        {showStatus === "Monthly" && entry.payload.month}
                        {showStatus === "Yearly" && entry.payload.year}
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <div className="w-3 h-3 rounded-full bg-[var(--no-color)]" />
                        <span>{value}h</span>
                      </div>
                    </div>
                  );
                }}
              />
            }
            cursor={false}
          />
          <Line
            dataKey="hours"
            type="bump"
            stroke="var(--color-hours)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </Card>
  );
};

export default HoursSpent;

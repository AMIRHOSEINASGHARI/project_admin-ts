"use client";

// cmp
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  balanceStatistics_chartConfig,
  balanceStatistics_chartData,
} from "@/constants/charts";

const BalanceStatistics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance statistics</CardTitle>
        <CardDescription>Statistics on balance over time</CardDescription>
      </CardHeader>
      <ChartDescriptions />
      <ChartContainer
        config={balanceStatistics_chartConfig}
        className="max-h-[270px] w-full"
      >
        <BarChart accessibilityLayer data={balanceStatistics_chartData}>
          <CartesianGrid vertical={false} className="chart-cartesian-grid" />
          <YAxis
            type="number"
            tickLine={false}
            tickMargin={30}
            axisLine={false}
          />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 4)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={4} />
          <Bar dataKey="savings" fill="var(--color-savings)" radius={4} />
          <Bar dataKey="investment" fill="var(--color-investment)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default BalanceStatistics;

const ChartDescriptions = () => {
  const data = [
    {
      name: "Income (+43%)",
      color: "bg-primary-1",
      value: "$6,789",
    },
    {
      name: "Savings (+3%)",
      color: "bg-theme-yellow",
      value: "$1,234",
    },
    {
      name: "Investment (+8%)",
      color: "bg-theme-sky",
      value: "$1,012",
    },
  ];

  return (
    <div className="flex items-center gap-6 flex-wrap mb-7">
      {data.map((item) => (
        <div key={item.name} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`} />
            <span className="text-small">{item.name}</span>
          </div>
          <span className="bold-value-2">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

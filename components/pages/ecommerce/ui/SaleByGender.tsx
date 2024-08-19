"use client";

// cmp
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    gender: "kids",
    value: (270 / 360) * 100,
    fill: "var(--color-kids)",
  },
  {
    gender: "mens",
    value: (180 / 360) * 100,
    fill: "var(--color-mens)",
  },
  {
    gender: "womens",
    value: (90 / 360) * 100,
    fill: "var(--color-womens)",
  },
];

const chartConfig = {
  womens: {
    label: "Womens",
    color: "var(--chart-rose)",
  },
  mens: {
    label: "Mens",
    color: "var(--chart-purple)",
  },
  kids: {
    label: "Kids",
    color: "var(--chart-blue)",
  },
} satisfies ChartConfig;

const SaleByGender = () => {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="pb-0">
        <CardTitle>Sale by gender</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-w-[150px] max-w-[300px]"
        >
          <RadialBarChart
            margin={{
              left: -10,
              right: -10,
              top: -10,
              bottom: -10,
            }}
            data={chartData}
            innerRadius="40%"
            barSize={17}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey="value"
              tick={false}
            />
            <RadialBar
              dataKey="value"
              background={{ fill: "var(--radial-chart-bg)" }}
              cornerRadius={50}
            />
            <ChartLegend content={<ChartLegendContent nameKey="gender" />} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="gender" />}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SaleByGender;

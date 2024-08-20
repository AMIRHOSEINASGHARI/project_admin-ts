"use client";

// cmp
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
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
  conversionRates_chartConfig,
  conversionRates_chartData,
} from "@/constants/charts";

const ConversionRates = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Conversion rates</CardTitle>
        <CardDescription>(+43%) than last year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={conversionRates_chartConfig}
          className="lg:max-h-[300px] max-lg:h-[400px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={conversionRates_chartData}
            layout="vertical"
            margin={{
              left: 5,
            }}
          >
            <XAxis
              type="number"
              dataKey="desktop"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={[0, 4, 4, 0]}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ConversionRates;

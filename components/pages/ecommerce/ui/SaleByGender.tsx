"use client";

// cmp
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  saleByGender_chartConfig,
  saleByGender_chartData,
} from "@/constants/charts";

const SaleByGender = () => {
  return (
    <Card className="flex flex-col w-full xl:w-[30%]">
      <CardHeader className="pb-0">
        <CardTitle>Sale by gender</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={saleByGender_chartConfig}
          className="mx-auto aspect-square min-w-[150px] max-w-[300px]"
        >
          <RadialBarChart
            margin={{
              left: -10,
              right: -10,
              top: -10,
              bottom: -10,
            }}
            data={saleByGender_chartData}
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

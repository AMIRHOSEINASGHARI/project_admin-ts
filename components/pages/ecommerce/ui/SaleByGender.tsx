"use client";

// cmp
import { PolarAngleAxis, PolarGrid, RadialBar, RadialBarChart } from "recharts";
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
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";
import { Separator } from "@/components/ui/separator";

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
            barSize={17}
            startAngle={90}
            endAngle={-270}
            innerRadius={80}
            outerRadius={150}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey="value"
              tick={false}
            />
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[var(--ghost)] last:fill-white dark:last:fill-dark2"
              polarRadius={[100, 95]}
            />
            <RadialBar
              dataKey="value"
              background={{ fill: "var(--ghost)" }}
              cornerRadius={50}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="gender" />}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <Separator className="my-5" />
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <ChartBadgeColor text="Mens" color="bg-primary-1" />
        <ChartBadgeColor text="Womens" color="bg-[var(--chart-amber)]" />
        <ChartBadgeColor text="Kids" color="bg-[var(--chart-blue)]" />
      </div>
    </Card>
  );
};

export default SaleByGender;

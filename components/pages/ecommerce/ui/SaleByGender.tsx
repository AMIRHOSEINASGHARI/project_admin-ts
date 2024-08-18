"use client";

// cmp
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { gender: "kids", sales: 90, fill: "var(--color-kids)" },
  { gender: "mens", sales: 180, fill: "var(--color-mens)" },
  { gender: "womens", sales: 270, fill: "var(--color-womens)" },
];

const chartConfig = {
  sales: {
    label: "Sales",
  },
  kids: {
    label: "Kids",
    color: "#ef4444", // Red-500
  },
  mens: {
    label: "Mens",
    color: "#eab308", // Yellow-500
  },
  womens: {
    label: "Womens",
    color: "#10b981", // Emerald-500
  },
} satisfies ChartConfig;

const SaleByGender = () => {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="pb-0">
        <CardTitle>Radial Chart</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-w-[200px] max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={60}
            outerRadius={120}
            startAngle={-90}
            endAngle={180}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="gender" />}
            />
            <RadialBar
              dataKey="sales"
              background={{ fill: "var(--radial-chart-bg)" }}
              cornerRadius={10}
            >
              <LabelList
                position="insideStart"
                dataKey="gender"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SaleByGender;

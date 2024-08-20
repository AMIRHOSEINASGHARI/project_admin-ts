"use client";

// cmp
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  currentVisits_chartConfig,
  currentVisits_chartData,
} from "@/constants/charts";

const CurrentVisits = () => {
  return (
    <Card className="flex flex-col xl:w-[33%] w-full">
      <CardHeader>
        <CardTitle>Current visits</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={currentVisits_chartConfig}
          className="flex items-center justify-center w-full min-h-[300px] max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={currentVisits_chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="flex-wrap gap-2 [&>*]:justify-center border-t dark:border-dark3"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CurrentVisits;

"use client";

// cmp
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  currentSubject_chartConfig,
  currentSubject_chartData,
} from "@/constants/charts";

const CurrentSubject = () => {
  return (
    <Card className="flex flex-col xl:w-[30%] w-full">
      <CardHeader>
        <CardTitle>Current subject</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={currentSubject_chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadarChart
            data={currentSubject_chartData}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="subject"
              tick={({ x, y, textAnchor, value, index, ...props }) => {
                const data = currentSubject_chartData[index];

                return (
                  <text
                    x={x}
                    y={index === 0 ? y - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-slate-500 text-x-small"
                    >
                      {data.subject}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid className="stroke-light3 dark:stroke-dark3" />
            <Radar
              dataKey="series1"
              fill="var(--color-series1)"
              fillOpacity={0.4}
              strokeWidth={2}
              stroke="var(--color-series1)"
            />
            <Radar
              dataKey="series2"
              fill="var(--color-series2)"
              fillOpacity={0.4}
              strokeWidth={2}
              stroke="var(--color-series2)"
            />
            <Radar
              dataKey="series3"
              fill="var(--color-series3)"
              fillOpacity={0.4}
              strokeWidth={2}
              stroke="var(--color-series3)"
            />
            <Radar
              dataKey="series4"
              fill="var(--color-series4)"
              fillOpacity={0.4}
              strokeWidth={2}
              stroke="var(--color-series4)"
            />
            <Radar
              dataKey="series5"
              fill="var(--color-series5)"
              fillOpacity={0.4}
              strokeWidth={2}
              stroke="var(--color-series5)"
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CurrentSubject;

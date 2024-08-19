"use client";

// cmp
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    subject: "English",
    series1: 186,
    series2: 80,
    series3: 50,
    series4: 40,
    series5: 120,
  },
  {
    subject: "History",
    series1: 305,
    series2: 200,
    series3: 150,
    series4: 50,
    series5: 40,
  },
  {
    subject: "Physics",
    series1: 237,
    series2: 120,
    series3: 130,
    series4: 150,
    series5: 30,
  },
  {
    subject: "Geography",
    series1: 73,
    series2: 190,
    series3: 140,
    series4: 120,
    series5: 200,
  },
  {
    subject: "Chinese",
    series1: 209,
    series2: 130,
    series3: 150,
    series4: 100,
    series5: 200,
  },
  {
    subject: "Math",
    series1: 214,
    series2: 140,
    series3: 110,
    series4: 124,
    series5: 140,
  },
];

const chartConfig = {
  series1: {
    label: "series1",
    color: "var(--default-chart-primary-1)",
  },
  series2: {
    label: "series2",
    color: "var(--default-chart-primary-2)",
  },
  series3: {
    label: "series3",
    color: "var(--default-chart-primary-light)",
  },
  series4: {
    label: "series4",
    color: "var(--default-chart-primary-light-2)",
  },
  series5: {
    label: "series5",
    color: "var(--default-chart-primary-light-3)",
  },
} satisfies ChartConfig;

const CurrentSubject = () => {
  return (
    <Card className="flex flex-col xl:w-[30%] w-full">
      <CardHeader>
        <CardTitle>Current subject</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadarChart
            data={chartData}
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
                const data = chartData[index];

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

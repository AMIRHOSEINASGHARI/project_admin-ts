"use client";

// cmp
import View from "@/components/shared/layout/View";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const charts = [
  {
    id: "conversations",
    title: "Conversations",
    color: "var(--chart-1)",
    chartData: [
      {
        name: "conversations",
        number: 150,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Conversations",
      },
    } satisfies ChartConfig,
  },
  {
    id: "applications",
    title: "Applications",
    color: "#4f46e5",
    chartData: [
      {
        name: "applications",
        number: 320,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Applications",
      },
    } satisfies ChartConfig,
  },
  {
    id: "downloads",
    title: "Downloads",
    color: "#eab308",
    chartData: [
      {
        name: "downloads",
        number: 260,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Downloads",
      },
    } satisfies ChartConfig,
  },
  {
    id: "files",
    title: "Files",
    color: "#f43f5e",
    chartData: [
      {
        name: "files",
        number: 90,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Files",
      },
    } satisfies ChartConfig,
  },
];

const RevenueRadialChart = () => {
  return (
    <View variant="flex-wrap">
      {charts.map((item) => (
        <Card key={item.id} className="flex flex-1 min-w-[250px]">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={item.chartConfig}
              className="mx-auto aspect-square max-h-[200px]"
            >
              <RadialBarChart
                data={item.chartData}
                startAngle={0}
                endAngle={item.chartData[0].number}
                innerRadius={80}
                outerRadius={110}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[86, 74]}
                />
                <RadialBar
                  dataKey="number"
                  background
                  cornerRadius={10}
                  style={{
                    fill: item.color,
                  }}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-dark1 dark:fill-light2 text-4xl font-bold"
                            >
                              {item.chartData[0].number.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-dark1 dark:fill-light2"
                            >
                              {item.title}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      ))}
    </View>
  );
};

export default RevenueRadialChart;

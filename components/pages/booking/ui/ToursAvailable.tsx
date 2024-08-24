"use client";

// cmp
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";

const data = {
  soldOut: 120,
  available: 66,
  chartData: [{ name: "tours", value: 186, fill: "url(#gradientColor)" }],
  chartConfig: {
    tours: {
      label: "Tours",
      color: "var(--primary-1)",
    },
  } satisfies ChartConfig,
};

const ToursAvailable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ToursAvailable</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={data.chartConfig}
          className="aspect-square mx-auto max-h-[250px] w-full"
        >
          <RadialBarChart
            data={data.chartData}
            startAngle={90}
            endAngle={
              -(data.soldOut * 360) / (data.soldOut + data.available) + 90
            }
            innerRadius={100}
            outerRadius={150}
          >
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  style={{ stopColor: "var(--primary-5)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "var(--primary-1)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[var(--radial-chart-bg)] last:fill-white dark:last:fill-dark2"
              polarRadius={[105, 95]}
            />
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill="url(#gradientColor)"
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
                          className="fill-slate-500 text-small"
                        >
                          Tours
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="dark:fill-white text-xl font-bold"
                        >
                          {data.chartData[0].value.toLocaleString()}
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
      <div className="px-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <ChartBadgeColor text="Sold out" color="bg-primary-1" />
          <span className="dark:text-white text-small">120 tours</span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <ChartBadgeColor
            text="Available"
            color="bg-[var(--radial-chart-bg)]"
          />
          <span className="dark:text-white text-small">66 tours</span>
        </div>
      </div>
    </Card>
  );
};

export default ToursAvailable;

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
import { ChartContainer } from "@/components/ui/chart";
// constants
import { revenueRadialChart_charts } from "@/constants/charts";

const RevenueRadialChart = () => {
  return (
    <View variant="flex-wrap">
      {revenueRadialChart_charts.map((item) => (
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
                  className="first:fill-[var(--radial-chart-bg)] last:fill-white dark:last:fill-dark2"
                  polarRadius={[83, 76]}
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

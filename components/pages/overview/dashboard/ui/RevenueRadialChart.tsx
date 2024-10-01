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
        <Card key={item.id} className="flex flex-1 min-w-[250px] relative">
          <CardContent className="flex items-center gap-5 pb-0">
            <ChartContainer
              config={item.chartConfig}
              className="aspect-square h-[80px]"
            >
              <RadialBarChart
                data={item.chartData}
                startAngle={90}
                endAngle={-(item.chartData[0].number * 360) / item.total + 90}
                innerRadius={35}
                outerRadius={55}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-[var(--ghost)] last:fill-white dark:last:fill-dark2"
                  polarRadius={[37, 33]}
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
                              className="dark:fill-white text-small font-bold"
                            >
                              {(
                                (item.chartData[0].number * 100) /
                                item.total
                              ).toFixed(1)}
                              %
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
            <div className="flex flex-col">
              <span className="font-black text-lg">
                {item.chartData[0].number.toLocaleString()}
              </span>
              <span className="text-small text-slate-500">{item.title}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </View>
  );
};

export default RevenueRadialChart;

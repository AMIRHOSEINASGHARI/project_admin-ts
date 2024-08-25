"use client";

// react
import * as React from "react";
// cmp
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// constants
import {
  coursePage_courseProgress_chartConfig,
  coursePage_courseProgress_chartData,
} from "@/constants/charts";
import ChartBadgeColor from "@/components/shared/ChartBadgeColor";
import clsx from "clsx";

const CourseProgress = () => {
  const totalRevenue = React.useMemo(() => {
    return coursePage_courseProgress_chartData.reduce(
      (acc, curr) => acc + curr.progress,
      0
    );
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Course progress</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={coursePage_courseProgress_chartConfig}
          className="mx-auto aspect-square min-h-[200px] w-full max-h-[320px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={coursePage_courseProgress_chartData}
              dataKey="progress"
              nameKey="category"
              innerRadius={90}
              strokeWidth={5}
            >
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
                          className="fill-dark1 dark:fill-light3 text-3xl font-bold"
                        >
                          {totalRevenue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-dark1 dark:fill-light3"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex items-center justify-center flex-wrap gap-3">
        {coursePage_courseProgress_chartData.map((item) => (
          <div key={item.category} className="capitalize">
            <ChartBadgeColor
              text={item.category}
              color={clsx({
                "bg-[var(--theme-yellow)]": item.category === "completed",
                "bg-[var(--theme-teal)]": item.category === "inProgress",
                "bg-[var(--ghost)]": item.category === "toStart",
              })}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CourseProgress;

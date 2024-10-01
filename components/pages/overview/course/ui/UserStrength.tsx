"use client";

// cmp
import { CardHeader, CardTitle } from "@/components/ui/card";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
// constants
import {
  userStrength_chartConfig,
  userStrength_chartData,
} from "@/constants/charts";

const UserStrength = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle>Strength</CardTitle>
      </CardHeader>
      <ChartContainer
        config={userStrength_chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadarChart
          data={userStrength_chartData}
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >
          <PolarAngleAxis
            dataKey="subject"
            tick={({ x, y, textAnchor, value, index, ...props }) => {
              const data = userStrength_chartData[index];

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
        </RadarChart>
      </ChartContainer>
    </div>
  );
};

export default UserStrength;

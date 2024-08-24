"use client";

// constants
import {
  bookingpage_totalIncomes_chartConfig,
  bookingpage_totalIncomes_chartData,
} from "@/constants/charts";
import {
  bookingPage_TotalIncomes_progress_data,
  bookingPage_TotalIncomes_radialChartComponent_data,
} from "@/constants";
// cmp
import { ArrowTrendUpRegular } from "@/components/svg";
import { Card } from "@/components/ui/card";
import {
  Line,
  LineChart,
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";

const TotalIncomes = () => {
  return (
    <Card className="bg-light2 dark:bg-dark3 p-3 space-y-3">
      <div className="flex flex-col xl:flex-row rounded-xl w-full bg-white dark:bg-dark2 p-3 gap-3">
        <div className="w-full p-5 bg-primary-2 rounded-xl flex flex-col gap-10">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col gap-3 text-primary-4 dark:text-primary-4">
              <span className="text-small">Total incomes</span>
              <span className="bold-value">$18,765</span>
            </div>
            <div className="text-primary-4 dark:text-primary-4">
              <div className="flex items-center gap-1">
                <ArrowTrendUpRegular />
                <span>+2.6%</span>
              </div>
              <span className="text-small">last month</span>
            </div>
          </div>
          <ChartComponent />
        </div>
        <ProgressComponent />
      </div>
      <RadialChartComponent />
    </Card>
  );
};

export default TotalIncomes;

const ChartComponent = () => {
  return (
    <div>
      <ChartContainer
        config={bookingpage_totalIncomes_chartConfig}
        className="h-[100px] w-full"
      >
        <LineChart accessibilityLayer data={bookingpage_totalIncomes_chartData}>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="p-0 rounded-xl overflow-hidden"
                color="var(--primary-1)"
                hideLabel
                formatter={(value, _, entry) => {
                  return (
                    <div className="flex flex-col w-full p-0 items-center justify-center text-xs text-muted-foreground">
                      <div className="bg-gray-100 dark:bg-dark3 font-medium w-full py-2 text-center">
                        {entry.payload.month}
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: "var(--primary-1)" }}
                        />
                        <span>${value}</span>
                      </div>
                    </div>
                  );
                }}
              />
            }
            cursor={false}
          />
          <Line
            dataKey="income"
            type="monotone"
            stroke="var(--color-income)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

const ProgressComponent = () => {
  return (
    <div className="w-full py-5 pr-5 pl-2 flex flex-col max-xl:gap-5 xl:justify-between">
      <span className="bold-value-2">Booked</span>
      {bookingPage_TotalIncomes_progress_data.map((item) => (
        <div key={item.title} className="w-full space-y-2">
          <div className="w-full flex justify-between gap-2 flex-wrap">
            <span className="font-bold dark:text-white text-small uppercase">
              {item.title}
            </span>
            <span className="font-bold dark:text-white text-small uppercase">
              {item.value}
            </span>
          </div>
          <Progress
            value={(item.precent * item.max) / 100}
            className={item.color}
          />
        </div>
      ))}
    </div>
  );
};

const RadialChartComponent = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center rounded-xl w-full bg-white dark:bg-dark2">
      {bookingPage_TotalIncomes_radialChartComponent_data.map((item) => (
        <div
          key={item.title}
          className={clsx(
            "flex items-center xl:justify-center w-full gap-5 max-xl:px-10 xl:px-3 py-10",
            {
              "xl:border-r-2 max-xl:border-b-2 border-dotted dark:border-dark3 border-light3":
                item.title === "Sold",
            }
          )}
        >
          <ChartContainer
            key={item.title}
            config={item.chartConfig}
            className="aspect-square h-[80px]"
          >
            <RadialBarChart
              data={item.chartData}
              startAngle={0}
              endAngle={(item.chartData[0].value * 360) / item.total}
              innerRadius={35}
              outerRadius={55}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-[var(--radial-chart-bg)] last:fill-white dark:last:fill-dark2"
                polarRadius={[37, 33]}
              />
              <RadialBar
                dataKey="value"
                background={{ fill: "var(--radial-chart-bg)" }}
                cornerRadius={10}
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
                              (item.chartData[0].value * 100) /
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
              {item.chartData[0].value.toLocaleString()}
            </span>
            <span className="text-small text-slate-500">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

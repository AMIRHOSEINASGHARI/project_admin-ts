"use client";

// icons
import { ArrowTrendDownRegular, ArrowTrendUpRegular } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import { Line, LineChart } from "recharts";
import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import clsx from "clsx";
// constants
import { ecommercePageCards_cards } from "@/constants";

const EcommercePageCards = () => {
  return (
    <View variant="flex-wrap">
      {ecommercePageCards_cards.map((card) => (
        <Card key={card.title} className="flex flex-col flex-1 min-w-[270px]">
          <span className="text-small font-medium">{card.title}</span>
          <div className="flex items-center justify-between">
            <span className="bold-value">{card.value}</span>
            <ChartComponent
              id={card.id}
              chartData={card.chart.chartData}
              chartConfig={card?.chart?.chartConfig}
              color={card.chart.chartColor}
            />
          </div>
          <div className="flex items-center gap-1">
            <div
              className={clsx("rounded-full p-2 w-fit text-small", {
                "text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-950":
                  card.profit >= 0,
                "text-rose-500 bg-rose-100 dark:text-rose-400 dark:bg-rose-950":
                  card.profit < 0,
              })}
            >
              {card.profit >= 0 ? (
                <ArrowTrendUpRegular />
              ) : (
                <ArrowTrendDownRegular />
              )}
            </div>
            <span className="text-small font-medium">{card.profit}%</span>
            <span className="text-small text-slate-400">last week</span>
          </div>
        </Card>
      ))}
    </View>
  );
};

export default EcommercePageCards;

const ChartComponent = ({
  id,
  chartConfig,
  chartData,
  color,
}: {
  id: string;
  chartConfig: ChartConfig;
  chartData: { month: string; desktop: number }[];
  color: {
    stopColor: string;
    endColor: string;
  };
}) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[80px] max-w-[150px] min-h-[40px] min-w-[100px]"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <defs>
          <linearGradient
            id={`colorGradient-${id}`}
            x1="0"
            y1="1"
            x2="0"
            y2="0"
          >
            <stop offset="0%" stopColor={color.stopColor} />
            <stop offset="100%" stopColor={color.endColor} />
          </linearGradient>
        </defs>
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="p-0 rounded-xl overflow-hidden"
              color={color.stopColor}
              hideLabel
              formatter={(value, name, entry) => {
                return (
                  <div className="flex flex-col w-full p-0 items-center justify-center text-xs text-muted-foreground">
                    <div className="bg-gray-100 dark:bg-dark3 font-medium w-full py-2 text-center">
                      {entry.payload.month}
                    </div>
                    <div className="flex items-center gap-2 py-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color.stopColor }}
                      />
                      <span>{value}</span>
                    </div>
                  </div>
                );
              }}
            />
          }
          cursor={false}
        />
        <Line
          dataKey="desktop"
          type="bump"
          stroke={`url(#colorGradient-${id})`} // Use the gradient as the stroke
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

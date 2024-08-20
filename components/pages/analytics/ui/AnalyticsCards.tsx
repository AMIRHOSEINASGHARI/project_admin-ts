"use client";

// icons
import { ShapeSquare } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import { Line, LineChart } from "recharts";
import { Card } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// constants
import { analyticsCards_cardsData } from "@/constants";

const AnalyticsCards = () => {
  return (
    <View variant="flex-wrap">
      {analyticsCards_cardsData.map((card) => (
        <Card
          key={card.text}
          className={`flex flex-col flex-1 overflow-hidden min-w-[250px] relative ${card.textColor} dark:${card.textColor}`}
          style={{
            backgroundImage: `linear-gradient(to top left, ${card.startColor}, ${card.endColor}`,
          }}
        >
          <div>
            <ShapeSquare className="w-full h-full absolute left-0 top-0 bottom-0 opacity-10" />
          </div>
          <div className="flex items-center justify-between mb-7">
            <div className={`text-[45px] ${card.iconColor}`}>{card.icon}</div>
            <div className="flex items-center gap-1 font-bold text-sm">
              <div>{card.trendIcon}</div>
              <span>{card.profit}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-small">{card.text}</span>
              <span className="bold-value">{card.value}</span>
            </div>
            <ChartComponent
              chartData={card.chart.chartData}
              chartConfig={card.chart.chartConfig}
              color={card.chartColor}
            />
          </div>
        </Card>
      ))}
    </View>
  );
};

export default AnalyticsCards;

const ChartComponent = ({
  chartConfig,
  chartData,
  color,
}: {
  chartConfig: ChartConfig;
  chartData: { month: string; desktop: number }[];
  color: string;
}) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[40px] w-[100px]">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <Line
          dataKey="desktop"
          type="linear"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

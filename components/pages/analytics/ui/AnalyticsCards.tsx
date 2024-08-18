"use client";

// icons
import {
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
  BagsFill,
  CartFill,
  MessageFill,
  ShapeSquare,
  UsersFill,
} from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import { Line, LineChart } from "recharts";
import { Card } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const cardsData = [
  {
    icon: <BagsFill />,
    profit: 2.6,
    startColor: "#34d399", // Emerald-400
    endColor: "#a7f3d0", // Emerald-200
    iconColor: "text-[#059669]", // Emerald-600
    textColor: "text-[#022c22]", // Emerald-950
    trendIcon: <ArrowTrendUpRegular />,
    chartColor: "#059669",
    text: "Weekly sales",
    value: "714k",
    chart: {
      chartData: [
        { month: "January", desktop: 22 },
        { month: "February", desktop: 8 },
        { month: "March", desktop: 35 },
        { month: "April", desktop: 50 },
        { month: "May", desktop: 82 },
        { month: "June", desktop: 84 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
    },
  },
  {
    icon: <UsersFill />,
    profit: -0.1,
    startColor: "#c084fc", // Purple-400
    endColor: "#e9d5ff", // Purple-200
    iconColor: "text-[#9333ea]", // Purple-600
    textColor: "text-[#3b0764]", // Purple-950
    trendIcon: <ArrowTrendDownRegular />,
    chartColor: "#9333ea",
    text: "New users",
    value: "1.35m",
    chart: {
      chartData: [
        { month: "January", desktop: 56 },
        { month: "February", desktop: 47 },
        { month: "March", desktop: 40 },
        { month: "April", desktop: 62 },
        { month: "May", desktop: 73 },
        { month: "June", desktop: 30 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
    },
  },
  {
    icon: <CartFill />,
    profit: 2.8,
    startColor: "#facc15", // Yellow-400
    endColor: "#fef08a", // Yellow-200
    iconColor: "text-[#ca8a04]", // Yellow-600
    textColor: "text-[#422006]", // Yellow-950
    trendIcon: <ArrowTrendUpRegular />,
    chartColor: "#ca8a04",
    text: "Purchase orders",
    value: "1.72m",
    chart: {
      chartData: [
        { month: "January", desktop: 40 },
        { month: "February", desktop: 70 },
        { month: "March", desktop: 50 },
        { month: "April", desktop: 28 },
        { month: "May", desktop: 70 },
        { month: "June", desktop: 75 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
    },
  },
  {
    icon: <MessageFill />,
    profit: 3.6,
    startColor: "#fb7185", // Rose-400
    endColor: "#fecdd3", // Rose-200
    iconColor: "text-[#e11d48]", // Rose-600
    textColor: "text-[#4c0519]", // Rose-950
    trendIcon: <ArrowTrendUpRegular />,
    chartColor: "#e11d48",
    text: "Messages",
    value: "234",
    chart: {
      chartData: [
        { month: "January", desktop: 56 },
        { month: "February", desktop: 30 },
        { month: "March", desktop: 23 },
        { month: "April", desktop: 47 },
        { month: "May", desktop: 40 },
        { month: "June", desktop: 62 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
    },
  },
];

const AnalyticsCards = () => {
  return (
    <View variant="flex-wrap">
      {cardsData.map((card) => (
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
              <span className="font-bold text-large">{card.value}</span>
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

"use client";

// types
import { TabDataType } from "@/types/shared";
// constants
import {
  totalBalance_expense_chartConfig,
  totalBalance_expense_chartData,
  totalBalance_income_chartConfig,
  totalBalance_income_chartData,
} from "@/constants/charts";
// cmp
import {
  AngleDownRegular,
  AngleUpRegular,
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
  PlusRegular,
  SolarDoubleAltArrowDownBoldDuotone,
  SolarDoubleAltArrowUpBoldDuotone,
} from "@/components/svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const TotalBalance = () => {
  return (
    <Card className="w-full space-y-4">
      <Header />
      <TabsButtons />
    </Card>
  );
};

export default TotalBalance;

const Header = () => {
  return (
    <div className="flex items-start flex-wrap justify-between gap-5 w-full">
      <div className="space-y-4">
        <CardTitle>Total balance</CardTitle>
        <CardTitle className="text-large font-extrabold">$49,990</CardTitle>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="ghost" className="gap-2">
          <AngleUpRegular className="text-icon-size" />
          <span className="text-small font-medium">Send</span>
        </Button>
        <Button variant="ghost" className="gap-2">
          <PlusRegular />
          <span className="text-small font-medium">Add card</span>
        </Button>
        <Button variant="ghost" className="gap-2">
          <AngleDownRegular className="text-icon-size" />
          <span className="text-small font-medium">Request</span>
        </Button>
      </div>
    </div>
  );
};

const TabsButtons = () => {
  const tab_data: TabDataType[] = [
    {
      id: "1",
      trigger: (
        <div>
          <div className="w-full flex justify-center max-md:mb-2 md:justify-end">
            <Badge
              variant="favorite"
              className="bg-primary-4 text-primary-1 dark:bg-primary-6 dark:text-primary-5 flex items-center gap-2 py-1 rounded-md border-none"
            >
              <SolarDoubleAltArrowUpBoldDuotone className="text-[16px]" />
              +8.2%
            </Badge>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="max-md:hidden dark:text-primary-6 dark:bg-primary-3 text-primary-6 bg-primary-3 w-fit rounded-full text-xl p-3">
              <ArrowTrendUpRegular className="text-primary-5" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-left text-small">Income</span>
              <span className="text-left text-large font-bold">$9,990</span>
            </div>
          </div>
        </div>
      ),
      content: (
        <ChartContainer
          config={totalBalance_income_chartConfig}
          className="max-h-[300px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={totalBalance_income_chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <YAxis
              dataKey="income"
              type="number"
              tickLine={false}
              tickMargin={30}
              axisLine={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="income"
              type="natural"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      ),
      value: "Income",
    },
    {
      id: "2",
      trigger: (
        <div>
          <div className="w-full flex justify-center max-md:mb-2 md:justify-end">
            <Badge
              variant="favorite"
              className="bg-rose-200/80 text-rose-800 dark:bg-rose-800/30 dark:text-rose-400 flex items-center gap-2 py-1 rounded-md border-none"
            >
              <SolarDoubleAltArrowDownBoldDuotone className="text-[16px]" />
              -6.6%
            </Badge>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="max-md:hidden dark:text-rose-100 dark:bg-rose-800 text-rose-100 bg-rose-700 w-fit rounded-full text-xl p-3">
              <ArrowTrendDownRegular />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-left text-small">Expense</span>
              <span className="text-left text-large font-bold">$1,989</span>
            </div>
          </div>
        </div>
      ),
      content: (
        <ChartContainer
          config={totalBalance_expense_chartConfig}
          className="max-h-[300px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={totalBalance_expense_chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <YAxis
              dataKey="expense"
              type="number"
              tickLine={false}
              tickMargin={30}
              axisLine={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="expense"
              type="natural"
              stroke="var(--color-expense)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      ),
      value: "Expense",
    },
  ];

  //   todo: fix style bug in tabs

  return (
    <Tabs defaultValue="Income" className="w-full space-y-4">
      <TabsList className="w-full p-2">
        {tab_data.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className="w-full data-[state=active]:shadow"
          >
            {tab.trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {tab_data.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

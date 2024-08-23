import { ChartConfig } from "@/components/ui/chart";

export const dashboardReviews_chartData = [
  {
    title: "Total Revenues",
    count: 576000,
    profit: 15,
    chartColor: "var(--primary-1)",
    chartData: [
      { month: "January", performance: 240 },
      { month: "February", performance: 305 },
      { month: "March", performance: 165 },
      { month: "April", performance: 73 },
      { month: "May", performance: 56 },
      { month: "June", performance: 100 },
    ],
  },
  {
    title: "Total Products",
    count: 16585,
    profit: -5,
    chartColor: "var(--chart-blue)",
    chartData: [
      { month: "January", performance: 200 },
      { month: "February", performance: 450 },
      { month: "March", performance: 360 },
      { month: "April", performance: 659 },
      { month: "May", performance: 200 },
      { month: "June", performance: 150 },
    ],
  },
  {
    title: "Total Users",
    count: 102365,
    profit: 12,
    chartColor: "var(--chart-amber)",
    chartData: [
      { month: "January", performance: 150 },
      { month: "February", performance: 600 },
      { month: "March", performance: 580 },
      { month: "April", performance: 650 },
      { month: "May", performance: 300 },
      { month: "June", performance: 400 },
    ],
  },
  {
    title: "Comments To Answer",
    count: 3650,
    profit: 63,
    chartColor: "var(--chart-teal)",
    chartData: [
      { month: "January", performance: 176 },
      { month: "February", performance: 360 },
      { month: "March", performance: 200 },
      { month: "April", performance: 100 },
      { month: "May", performance: 208 },
      { month: "June", performance: 214 },
    ],
  },
  {
    title: "Total Orders",
    count: 4500,
    profit: -8,
    chartColor: "var(--chart-rose)",
    chartData: [
      { month: "January", performance: 100 },
      { month: "February", performance: 150 },
      { month: "March", performance: 237 },
      { month: "April", performance: 150 },
      { month: "May", performance: 209 },
      { month: "June", performance: 150 },
    ],
  },
  {
    title: "Blogs",
    count: 2000,
    profit: -10,
    chartColor: "var(--chart-green)",
    chartData: [
      { month: "January", performance: 18 },
      { month: "February", performance: 30 },
      { month: "March", performance: 23 },
      { month: "April", performance: 73 },
      { month: "May", performance: 10 },
      { month: "June", performance: 50 },
    ],
  },
];

export const usersCompare_chartData = [
  { month: "January", asia: 200, europe: 200, america: 200 },
  { month: "February", asia: 305, europe: 305, america: 305 },
  { month: "March", asia: 237, europe: 237, america: 237 },
  { month: "April", asia: 73, europe: 73, america: 73 },
  { month: "May", asia: 209, europe: 209, america: 209 },
  { month: "June", asia: 186, europe: 186, america: 186 },
  { month: "July", asia: 305, europe: 305, america: 305 },
  { month: "August", asia: 214, europe: 214, america: 214 },
  { month: "September", asia: 100, europe: 100, america: 100 },
  { month: "October", asia: 214, europe: 214, america: 214 },
  { month: "November", asia: 300, europe: 300, america: 300 },
  { month: "December", asia: 150, europe: 150, america: 150 },
];

export const usersCompare_chartConfig = {
  asia: {
    label: "Asia",
    color: "var(--primary-3)",
  },
  europe: {
    label: "Europe",
    color: "var(--chart-yellow)",
  },
  america: {
    label: "America",
    color: "var(--chart-sky)",
  },
} satisfies ChartConfig;

export const revenuePieChart_chartData = [
  { category: "phone", revenue: 275, fill: "var(--color-phone)" },
  { category: "laptop", revenue: 200, fill: "var(--color-laptop)" },
  { category: "tv", revenue: 287, fill: "var(--color-tv)" },
  { category: "headphone", revenue: 173, fill: "var(--color-headphone)" },
  { category: "other", revenue: 190, fill: "var(--color-other)" },
];

export const revenuePieChart_chartConfig = {
  revenue: {
    label: "revenue",
  },
  phone: {
    label: "phone",
    color: "var(--primary-1)",
  },
  laptop: {
    label: "laptop",
    color: "var(--primary-2)",
  },
  tv: {
    label: "tv",
    color: "var(--primary-3)",
  },
  headphone: {
    label: "headphone",
    color: "var(--primary-4)",
  },
  other: {
    label: "Other",
    color: "var(--primary-5)",
  },
} satisfies ChartConfig;

export const revenueRadialChart_charts = [
  {
    id: "conversations",
    title: "Conversations",
    color: "var(--primary-1)",
    chartData: [
      {
        name: "conversations",
        number: 150,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Conversations",
      },
    } satisfies ChartConfig,
  },
  {
    id: "applications",
    title: "Applications",
    color: "var(--chart-yellow)",
    chartData: [
      {
        name: "applications",
        number: 320,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Applications",
      },
    } satisfies ChartConfig,
  },
  {
    id: "downloads",
    title: "Downloads",
    color: "var(--chart-purple)",
    chartData: [
      {
        name: "downloads",
        number: 260,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Downloads",
      },
    } satisfies ChartConfig,
  },
  {
    id: "files",
    title: "Files",
    color: "var(--chart-blue)",
    chartData: [
      {
        name: "files",
        number: 90,
      },
    ],
    chartConfig: {
      numbers: {
        label: "Numbers",
      },
      conversations: {
        label: "Files",
      },
    } satisfies ChartConfig,
  },
];

export const currentVisits_chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

export const currentVisits_chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--primary-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--primary-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--primary-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--primary-4)",
  },
  other: {
    label: "Other",
    color: "var(--primary-5)",
  },
} satisfies ChartConfig;

export const websiteVisits_chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 170, mobile: 200 },
  { month: "March", desktop: 140, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 150, mobile: 130 },
  { month: "June", desktop: 186, mobile: 80 },
  { month: "July", desktop: 160, mobile: 120 },
  { month: "August", desktop: 214, mobile: 140 },
  { month: "September", desktop: 100, mobile: 150 },
];

export const websiteVisits_chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary-3)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-yellow)",
  },
} satisfies ChartConfig;

export const conversionRates_chartData = [
  { month: "Italy", desktop: 44, mobile: 53 },
  { month: "Japan", desktop: 55, mobile: 32 },
  { month: "China", desktop: 41, mobile: 33 },
  { month: "Canada", desktop: 64, mobile: 52 },
  { month: "France", desktop: 22, mobile: 13 },
];

export const conversionRates_chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary-3)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary-5)",
  },
} satisfies ChartConfig;

export const currentSubject_chartData = [
  {
    subject: "English",
    series1: 186,
    series2: 80,
    series3: 50,
    series4: 40,
    series5: 120,
  },
  {
    subject: "History",
    series1: 305,
    series2: 200,
    series3: 150,
    series4: 50,
    series5: 40,
  },
  {
    subject: "Physics",
    series1: 237,
    series2: 120,
    series3: 130,
    series4: 150,
    series5: 30,
  },
  {
    subject: "Geography",
    series1: 73,
    series2: 190,
    series3: 140,
    series4: 120,
    series5: 200,
  },
  {
    subject: "Chinese",
    series1: 209,
    series2: 130,
    series3: 150,
    series4: 100,
    series5: 200,
  },
  {
    subject: "Math",
    series1: 214,
    series2: 140,
    series3: 110,
    series4: 124,
    series5: 140,
  },
];

export const currentSubject_chartConfig = {
  series1: {
    label: "series1",
    color: "var(--primary-1)",
  },
  series2: {
    label: "series2",
    color: "var(--primary-2)",
  },
  series3: {
    label: "series3",
    color: "var(--primary-4)",
  },
  series4: {
    label: "series4",
    color: "var(--primary-5)",
  },
  series5: {
    label: "series5",
    color: "var(--chart-yellow)",
  },
} satisfies ChartConfig;

export const saleByGender_chartData = [
  {
    gender: "kids",
    value: (270 / 360) * 100,
    fill: "var(--color-kids)",
  },
  {
    gender: "mens",
    value: (180 / 360) * 100,
    fill: "var(--color-mens)",
  },
  {
    gender: "womens",
    value: (90 / 360) * 100,
    fill: "var(--color-womens)",
  },
];

export const saleByGender_chartConfig = {
  womens: {
    label: "Womens",
    color: "var(--primary-1)",
  },
  mens: {
    label: "Mens",
    color: "var(--chart-amber)",
  },
  kids: {
    label: "Kids",
    color: "var(--chart-rose)",
  },
} satisfies ChartConfig;

export const yearlySales_chartData = [
  { date: "2024-04-03", income: 167, expense: 120 },
  { date: "2024-04-09", income: 59, expense: 110 },
  { date: "2024-04-19", income: 243, expense: 180 },
  { date: "2024-04-26", income: 75, expense: 130 },
  { date: "2024-05-14", income: 448, expense: 490 },
  { date: "2024-05-19", income: 235, expense: 180 },
  { date: "2024-06-10", income: 155, expense: 200 },
  { date: "2024-06-14", income: 426, expense: 380 },
  { date: "2024-06-16", income: 371, expense: 310 },
  { date: "2024-06-21", income: 169, expense: 210 },
  { date: "2024-06-27", income: 448, expense: 490 },
  { date: "2024-06-28", income: 149, expense: 200 },
];

export const yearlySales_chartConfig = {
  visitors: {
    label: "Visitors",
  },
  income: {
    label: "Total income",
    color: "var(--chart-amber)",
  },
  expense: {
    label: "Total expense",
    color: "var(--primary-1)",
  },
} satisfies ChartConfig;

export const salesOverview_data = [
  {
    title: "Total profit",
    max: 90000,
    value: 31051,
    color: "bg-primary-1 dark:bg-primary-1",
  },
  {
    title: "Total income",
    max: 75000,
    value: 30000,
    color: "bg-theme-sky dark:bg-theme-sky",
  },
  {
    title: "Total expenses",
    max: 25000,
    value: 6871,
    color: "bg-theme-yellow dark:bg-theme-yellow",
  },
];

export const totalBalance_income_chartData = [
  { month: "January", income: 5 },
  { month: "February", income: 31 },
  { month: "March", income: 33 },
  { month: "April", income: 50 },
  { month: "May", income: 80 },
  { month: "June", income: 76 },
  { month: "July", income: 72 },
  { month: "August", income: 76 },
  { month: "September", income: 89 },
];

export const totalBalance_income_chartConfig = {
  income: {
    label: "Income",
    color: "var(--primary-1)",
  },
} satisfies ChartConfig;

export const totalBalance_expense_chartData = [
  { month: "January", expense: 10 },
  { month: "February", expense: 41 },
  { month: "March", expense: 35 },
  { month: "April", expense: 51 },
  { month: "May", expense: 42 },
  { month: "June", expense: 62 },
  { month: "July", expense: 69 },
  { month: "August", expense: 91 },
  { month: "September", expense: 148 },
];

export const totalBalance_expense_chartConfig = {
  expense: {
    label: "Expense",
    color: "var(--theme-rose)",
  },
} satisfies ChartConfig;

export const balanceStatistics_chartData = [
  { year: "2019", income: 76, savings: 46, investment: 23 },
  { year: "2020", income: 42, savings: 44, investment: 22 },
  { year: "2021", income: 29, savings: 24, investment: 37 },
  { year: "2022", income: 41, savings: 43, investment: 38 },
  { year: "2023", income: 27, savings: 44, investment: 32 },
  { year: "2024", income: 96, savings: 43, investment: 25 },
];

export const balanceStatistics_chartConfig = {
  income: {
    label: "Income",
    color: "var(--primary-3)",
  },
  savings: {
    label: "Savings",
    color: "var(--theme-yellow)",
  },
  investment: {
    label: "Investment",
    color: "var(--theme-sky)",
  },
} satisfies ChartConfig;

import {
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
  BagsFill,
  BlogTextRegular,
  BoxOpenRegular,
  CartFill,
  ChartHistogramRegular,
  CoinRegular,
  CommentRegular,
  HomeRegular,
  MessageFill,
  OrderHistoryRegular,
  PlusRegular,
  SettingsSlidersRegular,
  ShopRegular,
  TodoAltRegular,
  UsersFill,
  UsersRegular,
  BankRegular,
  BookAltRegular,
  CourseRegular,
} from "@/components/svg";

export const images = {
  authLogin: "/images/auth-login.png",
  authRegister: "/images/auth-register.png",
  person: "/images/man.png",
  admin: "/images/admin-1.jpg",
  admin2: "/images/admin-2.jpg",
  admin3: "/images/admin-3.jpg",
  notFound: "/images/404.svg",
  notAllowed: "/images/not-allowed.png",
  error: "/images/sad.png",
};

export const menuLinks = [
  {
    title: "Dashboard",
    image: <HomeRegular />,
    link: "/dashboard",
  },
  {
    title: "Crypto",
    image: <CoinRegular />,
    link: "/crypto",
  },
  {
    title: "Analytics",
    image: <ChartHistogramRegular />,
    link: "/analytics",
  },
  {
    title: "Ecommerce",
    image: <ShopRegular />,
    link: "/ecommerce",
  },
  {
    title: "Banking",
    image: <BankRegular />,
    link: "/banking",
  },
  {
    title: "Booking",
    image: <BookAltRegular />,
    link: "/booking",
  },
  {
    title: "Course",
    image: <CourseRegular />,
    link: "/course",
  },
  {
    title: "Orders",
    image: <OrderHistoryRegular />,
    link: "/orders",
  },
  {
    title: "Products",
    image: <BoxOpenRegular />,
    link: "/products",
  },
  {
    title: "Add Product",
    image: <PlusRegular />,
    link: "/add-product",
  },
  {
    title: "Comments",
    image: <CommentRegular />,
    link: "/comments",
  },
  {
    title: "Users",
    image: <UsersRegular />,
    link: "/users",
  },
  {
    title: "Blogs",
    image: <BlogTextRegular />,
    link: "/blogs",
  },
  {
    title: "Add Blog",
    image: <PlusRegular />,
    link: "/add-blog",
  },
  {
    title: "Tasks",
    image: <TodoAltRegular />,
    link: "/tasks",
  },
  {
    title: "Account",
    image: <SettingsSlidersRegular />,
    link: "/account",
  },
];

export const analyticsCards_cardsData = [
  {
    icon: <BagsFill />,
    profit: 2.6,
    startColor: "#6ee7b7", // Emerald-300
    endColor: "#ecfdf5", // Emerald-50
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
          color: "hsl(var(--primary-1))",
        },
      },
    },
  },
  {
    icon: <UsersFill />,
    profit: -0.1,
    startColor: "#d8b4fe", // Purple-300
    endColor: "#faf5ff", // Purple-50
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
          color: "hsl(var(--primary-1))",
        },
      },
    },
  },
  {
    icon: <CartFill />,
    profit: 2.8,
    startColor: "#fde047", // Yellow-300
    endColor: "#fefce8", // Yellow-50
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
          color: "hsl(var(--primary-1))",
        },
      },
    },
  },
  {
    icon: <MessageFill />,
    profit: 3.6,
    startColor: "#fda4af", // Rose-300
    endColor: "#fff1f2", // Rose-50
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
          color: "hsl(var(--primary-1))",
        },
      },
    },
  },
];

export const ecommercePageCards_cards = [
  {
    id: "1",
    title: "Product sold",
    value: "765",
    profit: 2.6,
    chart: {
      chartData: [
        { month: "January", desktop: 22 },
        { month: "February", desktop: 8 },
        { month: "March", desktop: 35 },
        { month: "April", desktop: 50 },
        { month: "May", desktop: 82 },
        { month: "June", desktop: 84 },
        { month: "July", desktop: 77 },
        { month: "August", desktop: 12 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "#10b981",
        },
      },
      chartColor: {
        stopColor: "#10b981", // Teal-500
        endColor: "#86efac", // Teal-300
      },
    },
  },
  {
    id: "2",
    title: "Total balance",
    value: "18,765",
    profit: -0.1,
    chart: {
      chartData: [
        { month: "January", desktop: 56 },
        { month: "February", desktop: 47 },
        { month: "March", desktop: 40 },
        { month: "April", desktop: 62 },
        { month: "May", desktop: 73 },
        { month: "June", desktop: 30 },
        { month: "July", desktop: 23 },
        { month: "August", desktop: 54 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "#eab308",
        },
      },
      chartColor: {
        stopColor: "#eab308", // Yellow-500
        endColor: "#fde047", // Yellow-300
      },
    },
  },
  {
    id: "3",
    title: "Sales profit",
    value: "4,876",
    profit: 0.6,
    chart: {
      chartData: [
        { month: "January", desktop: 40 },
        { month: "February", desktop: 70 },
        { month: "March", desktop: 75 },
        { month: "April", desktop: 70 },
        { month: "May", desktop: 50 },
        { month: "June", desktop: 28 },
        { month: "July", desktop: 7 },
        { month: "August", desktop: 64 },
      ],
      chartConfig: {
        desktop: {
          label: "Desktop",
          color: "#a855f7",
        },
      },
      chartColor: {
        stopColor: "#a855f7", // Purple-500
        endColor: "#d8b4fe", // Purple-300
      },
    },
  },
];

export const bestSalesman_data = [
  {
    id: "1",
    image: images.admin,
    name: "Jayvion Simon",
    product: "CAP",
    country: "/flags/germany.png",
    total: 83.74,
  },
  {
    id: "2",
    image: images.admin2,
    name: "Lucian Obrien",
    product: "Branded shoes",
    country: "/flags/uk.png",
    total: 97.14,
  },
  {
    id: "3",
    image: images.admin3,
    name: "Deja Brady",
    product: "Headphone",
    country: "/flags/france.png",
    total: 68.71,
  },
  {
    id: "4",
    image: images.admin,
    name: "Harrison Stein",
    product: "Cell phone",
    country: "/flags/kor.png",
    total: 85.21,
  },
];

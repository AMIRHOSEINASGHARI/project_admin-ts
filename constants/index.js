import {
  BlogTextRegular,
  BoxOpenRegular,
  ChartHistogramRegular,
  CoinRegular,
  CommentRegular,
  HomeRegular,
  OrderHistoryRegular,
  PlusRegular,
  SettingsSlidersRegular,
  ShopRegular,
  TodoAltRegular,
  UsersRegular,
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

export const dashboardReviews = [
  {
    title: "Total Revenues",
    count: 576000,
    profit: 15,
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

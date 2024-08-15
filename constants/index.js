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

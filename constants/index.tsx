// cmp
import FollowersTab from "@/components/pages/management/user/profile/ui/FollowersTab";
import FriendsTab from "@/components/pages/management/user/profile/ui/FriendsTab";
import GalleryTab from "@/components/pages/management/user/profile/ui/GalleryTab";
import ProfileTab from "@/components/pages/management/user/profile/ui/ProfileTab";
// icons
import {
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
  BagsFill,
  CartFill,
  MessageFill,
  UsersFill,
  SolarHomeAngleBoldDuotone,
  SolarBagBoldDuotone,
  SolarGarageBoldDuotone,
  SolarBook2BoldDuotone,
  SolarMonitorBoldDuotone,
  SolarCartLarge4BoldDuotone,
  SolarHanger2BoldDuotone,
  SolarTextFieldFocusBoldDuotone,
  SolarChecklistMinimalisticBoldDuotone,
  SolarUserCircleBoldDuotone,
  SolarAnalyticsBoldDuotone,
  SolarDoubleAltArrowUpBoldDuotone,
  SolarDoubleAltArrowDownBoldDuotone,
  SolarDocumentsBoldDuotone,
  SolarFolderCheckBoldDuotone,
  SolarMedalRibbonStarBoldDuotone,
  SolarVideocameraRecordBoldDuotone,
  SolarGamepadBoldDuotone,
  SolarHeadphonesSquareSoundBoldDuotone,
  SolarLaptopBoldDuotone,
  SolarSmartphoneBoldDuotone,
  SolarPrinterMinimalisticBoldDuotone,
  SolarSpeakerNinimalisticBoldDuotone,
  SolarTabletBoldDuotone,
  SolarTvBoldDuotone,
  SolarWatchSquareBoldDuotone,
  SolarFileTextBoldDuotone,
  SolarMoneyBagBoldDuotone,
  SolarGolfBoldDuotone,
  SolarLetterOpenedBoldDuotone,
  SolarChatSquareCallBoldDuotone,
  SolarDocumentAddBoldDuotone,
  IcFolder,
  IcImg,
  IcAudio,
  IcVideo,
  IcExcel,
  IcAi,
  IcZip,
  IcTxt,
  IcPdf,
  IcPts,
  IcFile,
  IcPowerPoint,
  IcDocument,
  SolarUserCdBoldDuotone,
  SolarHeartBold,
  SolarUsersGroupRoundedBoldDuotone,
  SolarImages,
  Facebook,
  Instagram,
  Twitter,
  SolarPhoneBold,
  SolarChatRoundDotsBoldDuotone,
  SolarLetterBoldDuotone,
  SolarCloudUploadBoldDuotone,
} from "@/components/svg";
import { Linkedin } from "lucide-react";
// mock
import { fakeUsers } from "@/mock/users";
import { JobBenefits } from "@/types/job";
// types
import { File, Mail, MenuLink } from "@/types/shared";

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
  inviteAndEarn: "/images/invite-and-earn.png",
  noImage: "/images/no-image.jpg",
  emptyFolder: "/images/folder-empty.svg",
};

export const menuLinks: MenuLink[] = [
  {
    title: "Dashboard",
    image: <SolarHomeAngleBoldDuotone />,
    link: "/dashboard",
    isCollapsible: false,
    innerLinks: null,
    value: "/dashboard",
  },
  {
    title: "Ecommerce",
    image: <SolarBagBoldDuotone />,
    link: "/ecommerce",
    isCollapsible: false,
    innerLinks: null,
    value: "/ecommerce",
  },
  {
    title: "Analytics",
    image: <SolarAnalyticsBoldDuotone />,
    link: "/analytics",
    isCollapsible: false,
    innerLinks: null,
    value: "/analytics",
  },
  {
    title: "Banking",
    image: <SolarGarageBoldDuotone />,
    link: "/banking",
    isCollapsible: false,
    innerLinks: null,
    value: "/banking",
  },
  {
    title: "Booking",
    image: <SolarBook2BoldDuotone />,
    link: "/booking",
    isCollapsible: false,
    innerLinks: null,
    value: "/booking",
  },
  {
    title: "File",
    image: <SolarFileTextBoldDuotone />,
    link: "/file",
    isCollapsible: false,
    innerLinks: null,
    value: "/file",
  },
  {
    title: "Course",
    image: <SolarMonitorBoldDuotone />,
    link: "/course",
    isCollapsible: false,
    innerLinks: null,
    value: "/course",
  },
  {
    title: "User",
    image: <SolarUserCircleBoldDuotone />,
    link: "/user/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/user/profile",
        title: "Profile",
      },
      {
        href: "/user/cards",
        title: "Cards",
      },
      {
        href: "/user/list",
        title: "List",
      },
      {
        href: "/user/create",
        title: "Create",
      },
      {
        href: "/user/account",
        title: "Account",
      },
    ],
    value: "/user",
  },
  {
    title: "Product",
    image: <SolarHanger2BoldDuotone />,
    link: "/product/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/product/list",
        title: "List",
      },
      {
        href: "/product/cards",
        title: "Cards",
      },
      {
        href: "/product/create",
        title: "Create",
      },
    ],
    value: "/product",
  },
  {
    title: "Order",
    image: <SolarCartLarge4BoldDuotone />,
    link: "/order/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/order/list",
        title: "List",
      },
    ],
    value: "/order",
  },
  {
    title: "Blog",
    image: <SolarTextFieldFocusBoldDuotone />,
    link: "/blog/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/blog/list",
        title: "List",
      },
      {
        href: "/blog/create",
        title: "Create",
      },
    ],
    value: "/blog",
  },
  {
    title: "Job",
    image: <SolarMoneyBagBoldDuotone />,
    link: "/job/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/job/list",
        title: "List",
      },
      {
        href: "/job/create",
        title: "Create",
      },
    ],
    value: "/job",
  },
  {
    title: "Tour",
    image: <SolarGolfBoldDuotone />,
    link: "/tour/list",
    isCollapsible: true,
    innerLinks: [
      {
        href: "/tour/list",
        title: "List",
      },
      {
        href: "/tour/create",
        title: "Create",
      },
    ],
    value: "/tour",
  },
  {
    title: "File manager",
    image: <SolarDocumentAddBoldDuotone />,
    link: "/file-manager",
    isCollapsible: false,
    innerLinks: null,
    value: "/file-manager",
  },
  {
    title: "Mail",
    image: <SolarLetterOpenedBoldDuotone />,
    link: "/mail",
    isCollapsible: false,
    innerLinks: null,
    value: "/mail",
  },
  {
    title: "Chat",
    image: <SolarChatSquareCallBoldDuotone />,
    link: "/chat",
    isCollapsible: false,
    innerLinks: null,
    value: "/chat",
  },
  {
    title: "Kanban",
    image: <SolarChecklistMinimalisticBoldDuotone />,
    link: "/kanban",
    isCollapsible: false,
    innerLinks: null,
    value: "/kanban",
  },
];

export const productCategory = [
  {
    icon: <SolarVideocameraRecordBoldDuotone />,
    title: "Camera",
    value: "camera",
  },
  {
    icon: <SolarGamepadBoldDuotone />,
    title: "Gaming",
    value: "gaming",
  },
  {
    icon: <SolarHeadphonesSquareSoundBoldDuotone />,
    title: "Headphone",
    value: "headphone",
  },
  {
    icon: <SolarLaptopBoldDuotone />,
    title: "Laptop",
    value: "laptop",
  },
  {
    icon: <SolarSmartphoneBoldDuotone />,
    title: "Phone",
    value: "phone",
  },
  {
    icon: <SolarPrinterMinimalisticBoldDuotone />,
    title: "Printer",
    value: "printer",
  },
  {
    icon: <SolarSpeakerNinimalisticBoldDuotone />,
    title: "Speaker",
    value: "speaker",
  },
  {
    icon: <SolarTabletBoldDuotone />,
    title: "Tablet",
    value: "tablet",
  },
  {
    icon: <SolarTvBoldDuotone />,
    title: "TV",
    value: "tv",
  },
  {
    icon: <SolarWatchSquareBoldDuotone />,
    title: "Watch",
    value: "watch",
  },
  {
    icon: <SolarHanger2BoldDuotone />,
    title: "Clothes",
    value: "cloth",
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

export const currentBalance_carouselData = [
  {
    total: 23432.63,
    cardNumber: "**** **** **** 3640",
    cardHolder: "Deja Brady",
    expirationDate: "11/22",
  },
  {
    total: 18000.54,
    cardNumber: "**** **** **** 8864",
    cardHolder: "Harrison Stein",
    expirationDate: "11/25",
  },
  {
    total: 2000.89,
    cardNumber: "**** **** **** 7755",
    cardHolder: "Reece Chung",
    expirationDate: "11/22",
  },
];

export const bookingCards_cardsData = [
  {
    title: "Total booking",
    value: "714k",
    profit: "+2.6%",
    profitIcon: (
      <SolarDoubleAltArrowUpBoldDuotone className="text-icon-size text-green-500" />
    ),
  },
  {
    title: "Sold",
    value: "311k",
    profit: "+0.2%",
    profitIcon: (
      <SolarDoubleAltArrowUpBoldDuotone className="text-icon-size text-green-500" />
    ),
  },
  {
    title: "Canceled",
    value: "124k",
    profit: "-0.1%",
    profitIcon: (
      <SolarDoubleAltArrowDownBoldDuotone className="text-icon-size text-rose-500" />
    ),
  },
];

export const bookingPage_TotalIncomes_progress_data = [
  {
    title: "Pending",
    value: "9.91k",
    precent: 80,
    max: 100,
    color: "bg-gradient-to-r from-primary-5 to-primary-1",
  },
  {
    title: "Canceled",
    value: "1.95k",
    precent: 70,
    max: 100,
    color: "bg-gradient-to-r from-orange-400 to-orange-500",
  },
  {
    title: "Sold",
    value: "9.12k",
    precent: 90,
    max: 100,
    color: "bg-gradient-to-r from-indigo-400 to-indigo-500",
  },
];

export const bookingPage_TotalIncomes_radialChartComponent_data = [
  {
    title: "Sold",
    total: 52186,
    chartData: [
      { status: "status", value: 38566, fill: "var(--color-status)" },
    ],
    chartConfig: {
      value: {
        label: "Value",
      },
      status: {
        color: "var(--primary-1)",
      },
    },
  },
  {
    title: "Pending for payment",
    total: 40508,
    chartData: [
      { status: "status", value: 18472, fill: "var(--color-status)" },
    ],
    chartConfig: {
      value: {
        label: "Value",
      },
      status: {
        color: "var(--theme-yellow)",
      },
    },
  },
];

export const filePage_googleFilesCards_data = [
  {
    image: "/icons/files/dropbox.png",
    title: "Dropbox",
    totalSize: 22.35,
    currentSize: 20.24,
  },
  {
    image: "/icons/files/google-drive.png",
    title: "Drive",
    totalSize: 22.35,
    currentSize: 4.47,
  },
  {
    image: "/icons/files/onedrive.png",
    title: "OneDrive",
    totalSize: 22.35,
    currentSize: 11.18,
  },
];

export const coursePage_courseCards_data = [
  {
    value: 6,
    title: "Courses in progress",
    icon: <SolarDocumentsBoldDuotone className="text-yellow-500 text-4xl" />,
    bgColor: "bg-gradient-to-b from-yellow-500/20 to-yellow-500/10",
  },
  {
    value: 3,
    title: "Courses completed",
    icon: <SolarFolderCheckBoldDuotone className="text-green-500 text-4xl" />,
    bgColor: "bg-gradient-to-b from-green-500/20 to-green-500/10",
  },
  {
    value: 2,
    title: "Certificates",
    icon: (
      <SolarMedalRibbonStarBoldDuotone className="text-purple-500 text-4xl" />
    ),
    bgColor: "bg-gradient-to-b from-purple-500/20 to-purple-500/10",
  },
];

export const coursePage_continueCourse_data = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    lessons: 7,
    max: 12,
  },
  {
    id: 2,
    title: "Introduction to Python Programming",
    lessons: 8,
    max: 12,
  },
  {
    id: 3,
    title: "Introduction to Python Programming",
    lessons: 9,
    max: 12,
  },
  {
    id: 4,
    title: "Introduction to Python Programming",
    lessons: 10,
    max: 12,
  },
];

export const coursePage_featuredCourse_data = [
  {
    id: 1,
    time: "1h 40m",
    users: 497,
    title: "Introduction to Python Programming",
    price: 83.74,
  },
  {
    id: 2,
    time: "1h 40m",
    users: 763,
    title: "Digital marketing fundamentals",
    price: 93.45,
  },
  {
    id: 3,
    time: "1h 40m",
    users: 684,
    title: "Data Science with R",
    price: 65.69,
  },
  {
    id: 4,
    time: "1h 40m",
    users: 451,
    title: "Graphic Design Essentials",
    price: 26.57,
  },
  {
    id: 5,
    time: "1h 40m",
    users: 363,
    title: "Financial Planning for Beginners",
    price: 68.57,
  },
  {
    id: 6,
    time: "1h 40m",
    users: 497,
    title: "Human Resource Management Basics",
    price: 14.25,
  },
  {
    id: 7,
    time: "1h 40m",
    users: 478,
    title: "Introduction to Python Programming",
    price: 58.67,
  },
  {
    id: 8,
    time: "1h 40m",
    users: 258,
    title: "Digital marketing fundamentals",
    price: 49.67,
  },
  {
    id: 9,
    time: "1h 40m",
    users: 17,
    title: "Data Science with R",
    price: 17.39,
  },
  {
    id: 10,
    time: "1h 40m",
    users: 347,
    title: "Graphic Design Essentials",
    price: 82.74,
  },
];

export const coursePage_userReminders_data = [
  {
    id: "1",
    title: "Introduction to Python Programming",
    date: "26 Aug 2024 12:00 am",
    value: 58.3,
    color: "bg-theme-sky dark:bg-theme-sky",
  },
  {
    id: "2",
    title: "Digital Marketing Fundamentals",
    date: "26 Aug 2024 12:00 am",
    value: 66.7,
    color: "bg-theme-rose dark:bg-theme-rose",
  },
  {
    id: "3",
    title: "Data Science with R",
    date: "26 Aug 2024 12:00 am",
    value: 75,
    color: "bg-theme-violet dark:bg-theme-violet",
  },
  {
    id: "4",
    title: "Graphic Design Essentials",
    date: "26 Aug 2024 12:00 am",
    value: 83.3,
    color: "bg-theme-rose dark:bg-theme-rose",
  },
];

export const editor_selectHeadingNodes = [
  {
    title: "Paragraph",
    value: "paragraph",
  },
  {
    title: "Heading 1",
    value: 1,
    className: "font-bold text-[18px]",
  },
  {
    title: "Heading 2",
    value: 2,
    className: "font-bold text-[17px]",
  },
  {
    title: "Heading 3",
    value: 3,
    className: "font-bold text-[16px]",
  },
  {
    title: "Heading 4",
    value: 4,
    className: "font-bold text-[15px]",
  },
  {
    title: "Heading 5",
    value: 5,
    className: "font-bold text-[14px]",
  },
  {
    title: "Heading 6",
    value: 6,
    className: "font-bold text-[13px]",
  },
];

export const productReviews_rating = [
  {
    starts: "5",
    progressValue: 20,
    value: "2.03k",
  },
  {
    starts: "4",
    progressValue: 18,
    value: "8.49k",
  },
  {
    starts: "3",
    progressValue: 25,
    value: "6.98k",
  },
  {
    starts: "2",
    progressValue: 5,
    value: "9.12k",
  },
  {
    starts: "1",
    progressValue: 30,
    value: "1.95k",
  },
];

export const productReviews_reviews = [
  {
    user: fakeUsers[0],
    date: "26 Sep 2024",
    title:
      "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[1],
    date: "25 Sep 2024",
    title: "She eagerly opened the gift, her eyes sparkling with excitement.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[2],
    date: "24 Sep 2024",
    title:
      "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[3],
    date: "23 Sep 2024",
    title:
      "The aroma of freshly brewed coffee filled the air, awakening my senses.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[4],
    date: "22 Sep 2024",
    title:
      "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[5],
    date: "21 Sep 2024",
    title:
      "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[6],
    date: "20 Sep 2024",
    title:
      "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
    like: 123,
    disLike: 34,
  },
  {
    user: fakeUsers[7],
    date: "19 Sep 2024",
    title:
      "The waves crashed against the shore, creating a soothing symphony of sound.",
    like: 123,
    disLike: 34,
  },
];

export const blogDetailsPage_comments = [
  {
    user: fakeUsers[0],
    date: "27 Sep 2024",
    text: "She eagerly opened the gift, her eyes sparkling with excitement.",
  },
  {
    user: fakeUsers[1],
    date: "26 Sep 2024",
    text: "The aroma of freshly brewed coffee filled the air, awakening my senses.",
  },
  {
    user: fakeUsers[2],
    date: "24 Sep 2024",
    text: "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
  },
  {
    user: fakeUsers[3],
    date: "23 Sep 2024",
    text: "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
  },
  {
    user: fakeUsers[4],
    date: "22 Sep 2024",
    text: "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
  },
  {
    user: fakeUsers[5],
    date: "21 Sep 2024",
    text: "The waves crashed against the shore, creating a soothing symphony of sound.",
  },
  {
    user: fakeUsers[6],
    date: "20 Sep 2024",
    text: "The scent of blooming flowers wafted through the garden, creating a fragrant paradise.",
  },
  {
    user: fakeUsers[7],
    date: "19 Sep 2024",
    text: "She gazed up at the night sky, marveling at the twinkling stars that dotted the darkness.",
  },
];

export const files: File[] = [
  {
    id: "076a1e67-53ad-48ac-8633-bb7c5e326ec2",
    type: "folder",
    icon: <IcFolder />,
    name: "Image50",
    size: "191KB",
    modified: new Date("2024-03-25"),
    important: true,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "work",
      "confidential",
      "shared",
    ],
  },
  {
    id: "4e296ff7-f413-42e3-8b8d-12bed36c2c7a",
    type: "folder",
    icon: <IcFolder />,
    name: "Document63",
    size: "345KB",
    modified: new Date("2024-04-30"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "work", "personal"],
  },
  {
    id: "efe2a163-cfb5-43b6-9f4b-5e152c368936",
    type: "folder",
    icon: <IcFolder />,
    name: "Audio35",
    size: "32KB",
    modified: new Date("2024-02-06"),
    important: true,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "important",
      "confidential",
    ],
  },
  {
    id: "c983b909-9a0c-4287-8667-a40e8bbb82ea",
    type: "folder",
    icon: <IcFolder />,
    name: "File33",
    size: "310KB",
    modified: new Date("2024-03-22"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "personal"],
  },
  {
    id: "117baabf-28e5-425c-bad9-a7ab810fbc77",
    type: "folder",
    icon: <IcFolder />,
    name: "Video43",
    size: "27KB",
    modified: new Date("2024-04-07"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "personal", "work"],
  },
  {
    id: "232ab6df-1eb4-4d3c-96e6-8f213aa8a6a2",
    type: "folder",
    icon: <IcFolder />,
    name: "Document45",
    size: "112KB",
    modified: new Date("2024-04-13"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "important"],
  },

  {
    id: "95998b90-9621-423c-9879-3ed4728931bc",
    type: "jpg",
    icon: <IcImg />,
    name: "Image23",
    size: "285KB",
    modified: new Date("2023-11-06"),
    important: true,
    image: "/images/covers/cover_1.jpg",
    tags: ["Technology", "Health and Wellness", "Travel", "work", "shared"],
  },
  {
    id: "cea125dd-8486-4676-aaa0-82f2b860af2a",
    type: "jpg",
    icon: <IcImg />,
    name: "Audio19",
    size: "91KB",
    modified: new Date("2023-12-08"),
    important: false,
    image: "/images/covers/cover_2.jpg",
    tags: ["Technology", "Health and Wellness", "Travel", "personal"],
  },
  {
    id: "7a73a545-0b5e-4890-a165-5543d12aa9cc",
    type: "jpg",
    icon: <IcImg />,
    name: "Document97",
    size: "489KB",
    modified: new Date("2024-02-23"),
    important: true,
    image: "/images/covers/cover_3.jpg",
    tags: ["Technology", "Health and Wellness", "Travel", "important"],
  },
  {
    id: "43c853f0-4969-4ab4-b7cf-4ae62b7f99a0",
    type: "jpg",
    icon: <IcImg />,
    name: "Photo44",
    size: "150KB",
    modified: new Date("2023-12-12"),
    important: false,
    image: "/images/covers/cover_4.jpg",
    tags: ["Technology", "Health and Wellness", "Travel", "confidential"],
  },
  {
    id: "b646b522-2c91-4fb2-8b3b-22ccfba3a659",
    type: "jpg",
    icon: <IcImg />,
    name: "Image47",
    size: "96KB",
    modified: new Date("2023-12-05"),
    important: true,
    image: "/images/covers/cover_5.jpg",
    tags: ["Technology", "Health and Wellness", "Travel", "important"],
  },

  {
    id: "bce52312-aefa-48af-afb0-b7a14eced1a6",
    type: "xlsx",
    icon: <IcExcel />,
    name: "Video70",
    size: "299KB",
    modified: new Date("2024-02-02"),
    important: false,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "personal", "work"],
  },
  {
    id: "db78459a-262c-4655-98ba-bccfad95b18e",
    type: "ai",
    icon: <IcAi />,
    name: "Audio76",
    size: "158KB",
    modified: new Date("2024-03-11"),
    important: true,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "important",
      "work",
      "confidential",
    ],
  },
  {
    id: "0d5d18d7-783d-4dfc-ab9c-e7d0a0b4b0ba",
    type: "rar",
    icon: <IcZip />,
    name: "Video89",
    size: "290KB",
    modified: new Date("2024-01-11"),
    important: false,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "shared",
      "confidential",
      "important",
    ],
  },
  {
    id: "18f5cea5-c136-4bc2-a3e4-5b02fbc44033",
    type: "txt",
    icon: <IcTxt />,
    name: "Audio10",
    size: "123KB",
    modified: new Date("2024-04-26"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "personal"],
  },
  {
    id: "161d78e9-7a3a-4d94-b617-8f62c64b6ab5",
    type: "zip",
    icon: <IcZip />,
    name: "Image33",
    size: "166KB",
    modified: new Date("2024-09-15"),
    important: false,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "work", "shared"],
  },
  {
    id: "b38fec3f-9c0f-4fb8-9145-5985f576308f",
    type: "pdf",
    icon: <IcPdf />,
    name: "Image19",
    size: "466KB",
    modified: new Date("2023-10-23"),
    important: true,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "confidential"],
  },
  {
    id: "b92a3fa5-c960-4cbb-98fb-e9df7bd19c2f",
    type: "psd",
    icon: <IcPts />,
    name: "Document97",
    size: "354KB",
    modified: new Date("2024-09-24"),
    important: true,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "shared",
      "work",
      "confidential",
    ],
  },
  {
    id: "3f7aee37-212e-443a-8f17-02f1f5395ea8",
    type: "mp3",
    icon: <IcAudio />,
    name: "Audio78",
    size: "407KB",
    modified: new Date("2023-11-01"),
    important: true,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "confidential",
      "personal",
      "shared",
    ],
  },
  {
    id: "b8f488db-feb4-4fbe-8b68-93a88e25423e",
    type: "iso",
    icon: <IcZip />,
    name: "Spreadsheet44",
    size: "279KB",
    modified: new Date("2024-08-20"),
    important: false,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "shared",
      "personal",
      "confidential",
    ],
  },
  {
    id: "ba74f1c9-da5b-4b8b-9361-5aa9f3213274",
    type: "ppt",
    icon: <IcPowerPoint />,
    name: "File46",
    size: "422KB",
    modified: new Date("2024-09-15"),
    important: false,
    image: null,
    tags: ["Technology", "Health and Wellness", "Travel", "confidential"],
  },
  {
    id: "cd6e9ef6-5fb8-4d81-93e3-4bff8b43adb2",
    type: "docx",
    icon: <IcDocument />,
    name: "Image77",
    size: "212KB",
    modified: new Date("2024-01-29"),
    important: false,
    image: null,
    tags: [
      "Technology",
      "Health and Wellness",
      "Travel",
      "important",
      "work",
      "shared",
    ],
  },
];

export const filePage_summary_data = [
  {
    title: "Images",
    value: 223,
    size: "11.18 Gb",
    icon: <IcImg />,
  },
  {
    title: "Media",
    value: 223,
    size: "4.47 Gb",
    icon: <IcVideo />,
  },
  {
    title: "Documents",
    value: 223,
    size: "11.18 Gb",
    icon: <IcDocument />,
  },
  {
    title: "Other",
    value: 223,
    size: "2.24 Gb",
    icon: <IcFile />,
  },
];

export const profilePage_tabs_data = [
  {
    value: "profile",
    title: "Profile",
    icon: <SolarUserCdBoldDuotone className="text-icon-size" />,
    content: <ProfileTab />,
  },
  {
    value: "followers",
    title: "Followers",
    icon: <SolarHeartBold className="text-icon-size" />,
    content: <FollowersTab />,
  },
  {
    value: "friends",
    title: "Friends",
    icon: <SolarUsersGroupRoundedBoldDuotone className="text-icon-size" />,
    content: <FriendsTab />,
  },
  {
    value: "gallery",
    title: "Gallery",
    icon: <SolarImages className="text-icon-size" />,
    content: <GalleryTab />,
  },
];

export const profilePage_profileTab_socialBox_links = [
  {
    icon: <Facebook className="text-xl text-blue-500" />,
    link: "https://www.facebook.com/caitlyn.kerluke",
  },
  {
    icon: <Instagram className="text-xl text-rose-500" />,
    link: "https://www.instagram.com/caitlyn.kerluke",
  },
  {
    icon: <Linkedin className="text-xl text-blue-700" />,
    link: "https://www.linkedin.com/in/caitlyn.kerluke",
  },
  {
    icon: <Twitter className="text-xl text-black dark:text-white" />,
    link: "https://www.twitter.com/caitlyn.kerluke",
  },
];

export const profilePage_profileTab_postsBox_data = [
  {
    id: "1",
    title:
      "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    image: "/images/covers/cover_17.jpg",
    likes: 20,
    comments: [
      {
        id: "1",
        avatar: "/images/avatars/avatar_10.jpg",
        name: "Lainey Davidson",
        comment: "Praesent venenatis metus at",
        date: "12 Oct 2024",
      },
      {
        id: "2",
        avatar: "/images/avatars/avatar_15.jpg",
        name: "Cristopher Cardenas",
        comment:
          "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
        date: "11 Oct 2024",
      },
    ],
  },
  {
    id: "2",
    title: "She eagerly opened the gift, her eyes sparkling with excitement.",
    image: "/images/covers/cover_15.jpg",
    likes: 20,
    comments: [
      {
        id: "1",
        avatar: "/images/avatars/avatar_3.jpg",
        name: "Cristopher Cardenas",
        comment: "Praesent venenatis metus at",
        date: "12 Oct 2024",
      },
      {
        id: "2",
        avatar: "/images/avatars/avatar_4.jpg",
        name: "Melanie Noble",
        comment:
          "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
        date: "11 Oct 2024",
      },
    ],
  },
  {
    id: "3",
    title:
      "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
    image: "/images/covers/cover_20.jpg",
    likes: 20,
    comments: [],
  },
];

export const profilePage_friendsTab_social_data = [
  {
    id: "Facebook",
    icon: <Facebook className="text-xl text-blue-500" />,
  },
  {
    id: "Instagram",
    icon: <Instagram className="text-xl text-rose-500" />,
  },
  {
    id: "Linkedin",
    icon: <Linkedin className="text-xl text-blue-700" />,
  },
  {
    id: "Twitter",
    icon: <Twitter className="text-xl text-black dark:text-white" />,
  },
];

export const userCardsPage_social_data = [
  {
    id: "Facebook",
    icon: <Facebook className="text-xl text-blue-500" />,
  },
  {
    id: "Instagram",
    icon: <Instagram className="text-xl text-rose-500" />,
  },
  {
    id: "Linkedin",
    icon: <Linkedin className="text-xl text-blue-700" />,
  },
  {
    id: "Twitter",
    icon: <Twitter className="text-xl text-black dark:text-white" />,
  },
];

export const jobBenefits: JobBenefits[] = [
  "Free parking",
  "Bonus commission",
  "Travel",
  "Device support",
  "Health care",
  "Training",
  "Health insurance",
  "Retirement plans",
  "Paid time off",
  "Flexible work schedule",
];

export const jobCandidates_callToActionList = [
  {
    id: "1",
    icon: <SolarPhoneBold />,
    className:
      "text-rose-500 dark:text-rose-300 bg-rose-100 dark:bg-rose-800/30 hover:text-rose-600 dark:hover:text-rose-200 hover:bg-rose-200 dark:hover:bg-rose-800/40",
  },
  {
    id: "2",
    icon: <SolarChatRoundDotsBoldDuotone />,
    className:
      "text-blue-500 dark:text-blue-300 bg-blue-100 dark:bg-blue-800/30 hover:text-blue-600 dark:hover:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/40",
  },
  {
    id: "3",
    icon: <SolarLetterBoldDuotone />,
    className:
      "text-green-500 dark:text-green-300 bg-green-100 dark:bg-green-800/30 hover:text-green-600 dark:hover:text-green-200 hover:bg-green-200 dark:hover:bg-green-800/40",
  },
  {
    id: "4",
    icon: <SolarCloudUploadBoldDuotone />,
    className:
      "text-yellow-500 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-800/30 hover:text-yellow-600 dark:hover:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800/40",
  },
];

export const tourServices = [
  "Audio guide",
  "Food and drinks",
  "Lunch",
  "Private tour",
  "Special activities",
  "Entrance fees",
  "Gratuities",
  "Pick-up and drop off",
  "Professional guide",
  "Transport by air-conditioned",
];

export const mails: Mail[] = [
  {
    id: "AB12345XYZ",
    from: {
      name: "Jayvion Simon",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_1.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_2.jpg",
    },
    label: "inbox",
    date: "23 min",
    subject: "The Future of Renewable Energy: Innovations and Challenges Ahead",
    content:
      "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.",
    important: true,
    starred: false,
  },
  {
    id: "CD67890EFG",
    from: {
      name: "Lucian Obrien",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_2.jpg",
    },
    to: {
      name: "Deja Brady",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_3.jpg",
    },
    label: "sent",
    date: "2 day",
    subject:
      "Exploring the Impact of Artificial Intelligence on Modern Healthcare",
    content:
      "Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.",
    important: false,
    starred: true,
  },
  {
    id: "GH34567IJK",
    from: {
      name: "Harrison Stein",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_4.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_5.jpg",
    },
    label: "inbox",
    date: "3 days",
    subject: "Climate Change and Its Effects on Global Food Security",
    content:
      "Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.",
    important: true,
    starred: true,
  },
  {
    id: "IJ89012LMN",
    from: {
      name: "Reece Chung",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_6.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_7.jpg",
    },
    label: "spam",
    date: "4 days",
    subject: "The Rise of Remote Work: Benefits, Challenges, and Future Trends",
    content:
      "Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.",
    important: false,
    starred: false,
  },
  {
    id: "KL56789OPQ",
    from: {
      name: "Lainey Davidson",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_8.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_9.jpg",
    },
    label: "drafts",
    date: "5 days",
    subject: "Understanding Blockchain Technology: Beyond Cryptocurrency",
    content:
      "Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.",
    important: false,
    starred: false,
  },
  {
    id: "MN01234RST",
    from: {
      name: "Cristopher Cardenas",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_2.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_5.jpg",
    },
    label: "social",
    date: "6 days",
    subject:
      "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    content:
      "Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.",
    important: false,
    starred: false,
  },
  {
    id: "OP78901UVW",
    from: {
      name: "Melanie Noble",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_6.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_5.jpg",
    },
    label: "forums",
    date: "7 days",
    subject: "Sustainable Fashion: How the Industry is Going Green",
    content:
      "Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.",
    important: true,
    starred: false,
  },
  {
    id: "QR23456XYZ",
    from: {
      name: "Chase Day",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_8.jpg",
    },
    to: {
      name: "Jaydon Frankie",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_13.jpg",
    },
    label: "inbox",
    date: "8 days",
    subject:
      "Space Exploration: New Frontiers and the Quest for Extraterrestrial Life",
    content:
      "Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.",
    important: true,
    starred: false,
  },
  {
    id: "ST34567YZA",
    from: {
      name: "Jayvion Simon",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_14.jpg",
    },
    to: {
      name: "Lucian Obrien",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_15.jpg",
    },
    label: "sent",
    date: "9 days",
    subject:
      "The Evolution of E-Commerce: Trends Shaping the Online Retail Landscape",
    content:
      "Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.",
    important: false,
    starred: true,
  },
  {
    id: "UV67890BCD",
    from: {
      name: "Jayvion Simon",
      email: "nannie.abernathy70@yahoo.com",
      avatar: "/images/avatars/avatar_12.jpg",
    },
    to: {
      name: "Harrison Stein",
      email: "demo@onlineshop.com",
      avatar: "/images/avatars/avatar_13.jpg",
    },
    label: "promotions",
    date: "10 days",
    subject: "The Future of Renewable Energy: Innovations and Challenges Ahead",
    content:
      "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.",
    important: true,
    starred: true,
  },
];

export const productsPageQueries = [
  {
    value: "search",
    title: "Search",
  },
  {
    value: "stock",
    title: "Stock",
  },
  {
    value: "category",
    title: "Category",
  },
  {
    value: "published",
    title: "Published",
  },
  {
    value: "discount",
    title: "Discount",
  },
];

export const usersPageQueries = [
  {
    value: "status",
    title: "Status",
  },
  {
    value: "role",
    title: "Role",
  },
  {
    value: "search",
    title: "Search",
  },
];

export const blogsPageQueries = [
  {
    value: "search",
    title: "Search",
  },
  {
    value: "sort",
    title: "Sort",
  },
  {
    value: "status",
    title: "Status",
  },
];

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
} from "@/components/svg";
// mock
import { fakeUsers } from "@/mock/users";

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
};

export const menuLinks = [
  {
    title: "Dashboard",
    image: <SolarHomeAngleBoldDuotone />,
    link: "/dashboard",
  },
  {
    title: "Ecommerce",
    image: <SolarBagBoldDuotone />,
    link: "/ecommerce",
  },
  {
    title: "Analytics",
    image: <SolarAnalyticsBoldDuotone />,
    link: "/analytics",
  },
  {
    title: "Banking",
    image: <SolarGarageBoldDuotone />,
    link: "/banking",
  },
  {
    title: "Booking",
    image: <SolarBook2BoldDuotone />,
    link: "/booking",
  },
  {
    title: "File",
    image: <SolarFileTextBoldDuotone />,
    link: "/file",
  },
  {
    title: "Course",
    image: <SolarMonitorBoldDuotone />,
    link: "/course",
  },
  {
    title: "User",
    image: <SolarUserCircleBoldDuotone />,
    link: "/users",
  },
  {
    title: "Product",
    image: <SolarHanger2BoldDuotone />,
    link: "/products",
  },
  {
    title: "Order",
    image: <SolarCartLarge4BoldDuotone />,
    link: "/orders",
  },
  {
    title: "Invoice",
    image: <SolarDocumentsBoldDuotone />,
    link: "/invoice",
  },
  {
    title: "Blog",
    image: <SolarTextFieldFocusBoldDuotone />,
    link: "/blogs",
  },
  {
    title: "Job",
    image: <SolarMoneyBagBoldDuotone />,
    link: "/jobs",
  },
  {
    title: "Tour",
    image: <SolarGolfBoldDuotone />,
    link: "/tours",
  },
  {
    title: "File manager",
    image: <SolarDocumentAddBoldDuotone />,
    link: "/file-manager",
  },
  {
    title: "Mail",
    image: <SolarLetterOpenedBoldDuotone />,
    link: "/mail",
  },
  {
    title: "Chat",
    image: <SolarChatSquareCallBoldDuotone />,
    link: "/chat",
  },
  {
    title: "Kanban",
    image: <SolarChecklistMinimalisticBoldDuotone />,
    link: "/kanban",
  },
];

export const sidebar_Accordions = [
  {
    value: "Overview",
    list: menuLinks.slice(0, 7),
  },
  {
    value: "Management",
    list: menuLinks.slice(7, 18),
  },
];

export const sidebar_accordionList = [
  {
    trigger: menuLinks[7],
    value: "/user",
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
  },
  {
    trigger: menuLinks[8],
    value: "/product",
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
  },
  {
    trigger: menuLinks[9],
    value: "/order",
    innerLinks: [
      {
        href: "/order/list",
        title: "List",
      },
    ],
  },
  {
    trigger: menuLinks[10],
    value: "/invoice",
    innerLinks: [
      {
        href: "/invoice/list",
        title: "List",
      },
      {
        href: "/invoice/create",
        title: "Create",
      },
    ],
  },
  {
    trigger: menuLinks[11],
    value: "/blog",
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
  },
  {
    trigger: menuLinks[12],
    value: "/job",
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
  },
  {
    trigger: menuLinks[13],
    value: "/tour",
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

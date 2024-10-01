export type PresetType = "teal" | "sky" | "violet" | "blue" | "yellow" | "rose";

export type NavColor = "Integrate" | "Apparent";

export type TabDataType = {
  id: string;
  trigger: JSX.Element;
  content: JSX.Element;
  value: "Income" | "Expense";
};

export type TransitionType = "Receive money from" | "Payment for";

export type TransitionStatusType = "Progress" | "Completed" | "Failed";

export type RecentTransitionsTableData = {
  id: string;
  image: string;
  type: TransitionType;
  user: string;
  date: {
    date: string;
    hour: string;
  };
  amount: number;
  status: TransitionStatusType;
};

export type ChartShowStatusType = "Weekly" | "Monthly" | "Yearly";

export type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

export type MenuLinksProps = {
  title: string;
  pathname: string;
  navColor: NavColor | null;
  link: string;
  image: JSX.Element;
  isLink?: boolean;
};

export type HeadingNodes = 1 | 2 | 3 | 4 | 5 | 6;

export type ActiveNodes =
  | "paragraph"
  | "bold"
  | "italic"
  | "strike"
  | "underline"
  | "bulletList"
  | "orderedList"
  | "align-left"
  | "align-center"
  | "align-right"
  | "justify";

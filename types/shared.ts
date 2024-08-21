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

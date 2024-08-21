export type PresetType = "teal" | "sky" | "violet" | "blue" | "yellow" | "rose";

export type NavColor = "Integrate" | "Apparent";

export type TabDataType = {
  id: string;
  trigger: JSX.Element;
  content: JSX.Element;
  value: "Income" | "Expense";
};

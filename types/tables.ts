// types
import { OrderStatus } from "./order";

export type OrdersTableRowType = {
  key: string;
  order: JSX.Element;
  user: JSX.Element;
  date: JSX.Element;
  items: number;
  price: number;
  status: JSX.Element;
  actions: JSX.Element;
};

// types
import { AdminRoll } from "./admin";
import { NavColor } from "./shared";

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
  onClick?: () => void;
};

export type ProfileTabsListProps = {
  name: string;
  avatar: string;
  roll: AdminRoll;
};

export type EditorProps = {
  content: string;
  onFieldChange: (value: string) => void;
};

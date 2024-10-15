// react
import { Dispatch, SetStateAction } from "react";
// types
import { AdminRoll, AdminType } from "./admin";
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

export type UserFormPorps = {
  type: "create" | "edit";
  user?: AdminType;
};

export type BlogFileUploaderProps = {
  onFieldChange: (value: File[] | string) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  cover: string;
  setCover: Dispatch<SetStateAction<string>>;
};

export type AvatarFileUploaderProps = {
  onFieldChange: (value: File[] | string) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  avatar: string;
  setAvatar: Dispatch<SetStateAction<string>>;
  isVerified: boolean;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  formMessage: JSX.Element;
};

export type PhoneNumberInputProps = {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  onFieldChange: (value: string) => void;
};

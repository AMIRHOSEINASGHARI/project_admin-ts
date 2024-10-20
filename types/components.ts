// react
import { Dispatch, SetStateAction } from "react";
// types
import { AdminRole, AdminType } from "./admin";
import { NavColor } from "./shared";
import { JobEmployment, JobExperience, JobSalary, JobType } from "./job";

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
  role: AdminRole;
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

export type JobFormProps = { type: "create" | "edit"; job?: JobType };

export type JobFileUploaderProps = {
  onFieldChange: (value: File[] | string) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
};

export type JobContentDetailsProps = {
  address: string;
  company: string;
  employmentType: JobEmployment;
  experience: JobExperience;
  expired: Date;
  image: string;
  phoneNumber: string;
  price: number;
  published: boolean;
  salary: JobSalary;
  createdAt: Date;
};

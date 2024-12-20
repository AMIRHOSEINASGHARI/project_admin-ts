// react
import { Dispatch, SetStateAction } from "react";
// types
import { AdminRole, AdminType } from "./admin";
import { Mail, MailLabel, NavColor, SidebarMenuInnerLink } from "./shared";
import { JobEmployment, JobExperience, JobSalary, JobType } from "./job";
import { TourType } from "./tour";
import { ProductType } from "./product";

export type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

export type MenuLinksProps = {
  title: string;
  link: string;
  image: JSX.Element;
  isCollapsible?: boolean;
  innerLinks?: SidebarMenuInnerLink[] | null;
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

export type TourFormProps = { type: "create" | "edit"; tour?: TourType };

export type ProductFormProps = {
  type: "create" | "edit";
  product?: ProductType;
};

export type MailFoldersProps = {
  folderMails: Mail[];
  activeConversation: Mail | undefined | null;
  setActiveConversation: Dispatch<SetStateAction<Mail | undefined | null>>;
  activeLabel: string | null;
};

export type MailContainerMobileHeaderProps = {
  folderMails: Mail[];
  activeConversation: Mail | undefined | null;
  setActiveConversation: Dispatch<SetStateAction<Mail | undefined | null>>;
  activeLabel: string | null;
};

export type MailConversationHeaderProps = {
  important: boolean;
  starred: boolean;
  label: MailLabel;
};

export type DeleteSearchQueryProps = {
  value: string;
  title: string;
  paramValue: string;
  handleDeleteQuery: (value: string) => void;
};

export type InnerLinkProps = {
  href: string;
  title: string;
  navColor: NavColor | null;
  pathname: string;
  isMobile?: boolean;
  setOpenMobile?: (open: boolean) => void;
};

export type CollapsibleMenuProps = {
  image: JSX.Element;
  title: string;
  navColor: NavColor | null;
  pathname: string;
  state: "expanded" | "collapsed";
  link: string;
  innerLinks: SidebarMenuInnerLink[] | null | undefined;
};

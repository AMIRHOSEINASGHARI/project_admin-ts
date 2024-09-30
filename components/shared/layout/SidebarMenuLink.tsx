// next
import Link from "next/link";
// types
import { MenuLinksProps } from "@/types/shared";
// cmp
import clsx from "clsx";

const SidebarMenuLink = ({
  title,
  pathname,
  navColor,
  link,
  image,
}: MenuLinksProps) => {
  const styles = clsx("rounded-lg ml-2 mb-1 Transition", {
    "bg-primary-4 text-primary-1 dark:bg-primary-6 dark:text-primary-5 font-medium":
      pathname === link && navColor === "Integrate",
    "text-icon-light dark:text-icon-dark hover:dark:bg-dark2 hover:bg-light3":
      pathname !== link && navColor === "Integrate",
    "text-slate-400 hover:bg-slate-600/30 dark:hover:bg-slate-600/30":
      pathname !== link && navColor === "Apparent",
    "text-primary-5 dark:bg-primary-6 bg-primary-6 dark:text-primary-5 font-medium":
      pathname === link && navColor === "Apparent",
  });

  return (
    <li className={styles}>
      <Link href={link} className="flex items-center gap-[15px] p-[10px]">
        <div className="text-icon-size">{image}</div>
        <span className="text-sm">{title}</span>
      </Link>
    </li>
  );
};
export default SidebarMenuLink;

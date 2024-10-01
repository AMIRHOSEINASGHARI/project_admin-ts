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
  isLink = true,
  onClick,
}: MenuLinksProps) => {
  const styles = clsx("rounded-lg ml-2 mb-1 Transition", {
    "bg-primary-4 text-primary-1 dark:bg-primary-6 dark:text-primary-5 font-medium":
      pathname.includes(link) && navColor === "Integrate",
    "text-icon-light dark:text-icon-dark hover:dark:bg-dark2 hover:bg-light3":
      !pathname.includes(link) && navColor === "Integrate",
    "text-slate-400 hover:bg-slate-600/30 dark:hover:bg-slate-600/30":
      !pathname.includes(link) && navColor === "Apparent",
    "text-primary-5 dark:bg-primary-6 bg-primary-6 dark:text-primary-5 font-medium":
      pathname.includes(link) && navColor === "Apparent",
  });

  return (
    <li className={styles}>
      {isLink ? (
        <Link
          href={link}
          className="flex items-center gap-[15px] p-[10px]"
          onClick={onClick}
        >
          <div className="text-icon-size">{image}</div>
          <span className="text-sm">{title}</span>
        </Link>
      ) : (
        <div className="flex items-center gap-[15px] p-[10px]">
          <div className="text-icon-size">{image}</div>
          <span className="text-sm">{title}</span>
        </div>
      )}
    </li>
  );
};
export default SidebarMenuLink;

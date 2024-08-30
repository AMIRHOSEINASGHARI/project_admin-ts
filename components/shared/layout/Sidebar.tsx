"use client";

// react
import { Fragment } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// constants
import { menuLinks } from "@/constants";
// cmp
import clsx from "clsx";
// icons
import { LogoRegular } from "@/components/svg";

const Sidebar = () => {
  const pathname = usePathname();
  const { navColor } = useNavColor();

  const color =
    navColor === "Integrate"
      ? "bg-white dark:bg-dark1"
      : "bg-dark1 dark:bg-dark2";

  return (
    <aside
      className={`w-[300px] max-md:hidden fixed z-40 left-0 h-screen border-r border-color overflow-y-auto sidebarScroll ${color}`}
    >
      <div
        className={`flex items-center justify-between fixed text-primary-1 border-r border-color p-4 top-0 w-[300px] z-20 ${color}`}
      >
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <LogoRegular className="ml-[8px] text-[40px]" />
        </Link>
      </div>
      <ul className="pt-[60px] pb-5 p-4">
        <div className="ml-4 mb-2 mt-5">
          <h1 className="text-small tracking-tight text-gray-500 dark:text-slate-500">
            Overview
          </h1>
        </div>
        {menuLinks.map((item) => (
          <Fragment key={item.title}>
            <li
              className={clsx("rounded-xl ml-2 mb-1", {
                "hover:bg-primary-4 text-primary-1 dark:bg-primary-6 dark:text-primary-5 font-medium":
                  pathname === item.link && navColor === "Integrate",
                "text-icon-light dark:text-icon-dark hover:dark:bg-dark2 hover:bg-light3":
                  pathname !== item.link && navColor === "Integrate",
                "text-slate-400 hover:bg-slate-600/30 dark:hover:bg-slate-600/30":
                  pathname !== item.link && navColor === "Apparent",
                "text-primary-5 dark:bg-primary-6 bg-primary-6 dark:text-primary-5 font-medium":
                  pathname === item.link && navColor === "Apparent",
              })}
            >
              <Link
                href={item.link}
                className="flex items-center gap-[15px] p-2"
              >
                <div className="text-icon-size">{item.image}</div>
                <span className="text-small">{item.title}</span>
              </Link>
            </li>
            {item.title === "Course" && (
              <div className="ml-4 mb-2 mt-5">
                <h1 className="text-small tracking-tight text-gray-500 dark:text-slate-500">
                  Management
                </h1>
              </div>
            )}
            {item.title === "Add Blog" && (
              <div className="ml-4 mb-2 mt-5">
                <h1 className="text-small tracking-tight text-gray-500 dark:text-slate-500">
                  Settings
                </h1>
              </div>
            )}
          </Fragment>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

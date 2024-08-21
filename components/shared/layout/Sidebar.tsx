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
      ? "bg-white dark:bg-dark1 border-gray-200 dark:border-dark2"
      : "bg-dark1 dark:bg-dark2 border-gray-200 dark:border-dark2";

  return (
    <aside
      className={`w-[300px] max-md:hidden fixed z-30 left-0 h-screen border-r overflow-y-auto sidebarScroll ${color}`}
    >
      <div
        className={`flex items-center justify-between fixed text-primary-1 border-r p-4 top-0 w-[300px] z-20 ${color}`}
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
              className={clsx("rounded-xl", {
                "bg-primary-1 text-white dark:bg-primary-2 dark:text-white font-medium":
                  pathname === item.link,
                "text-dark3 dark:text-light3 hover:dark:bg-dark2 hover:bg-light3":
                  pathname !== item.link,
                "text-slate-400 hover:bg-slate-600/30 dark:hover:bg-slate-600/30":
                  pathname !== item.link && navColor === "Apparent",
              })}
            >
              <Link
                href={item.link}
                className="flex items-center gap-[15px] px-4 py-3"
              >
                <div className="text-icon">{item.image}</div>
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

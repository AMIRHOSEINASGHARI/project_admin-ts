"use client";

// react
import { Fragment } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// constants
import { menuLinks } from "@/constants";
// cmp
import clsx from "clsx";
// icons
import { LogoRegular } from "@/components/svg";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[300px] max-md:hidden fixed z-30 left-0 h-screen bg-white dark:bg-dark1 border-r border-gray-200 dark:border-dark2 overflow-y-auto sidebarScroll">
      <div className="flex items-center justify-between fixed bg-white text-primary-1 dark:bg-dark1 border-r border-gray-200 dark:border-dark2 p-4 top-0 w-[300px] z-20">
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <LogoRegular className="ml-[8px] text-[40px]" />
        </Link>
      </div>
      <ul className="pt-[60px] pb-5 p-4">
        <div className="ml-4 mb-2 mt-5">
          <h1 className="text-small tracking-tight text-gray-400 dark:text-slate-500">
            Overview
          </h1>
        </div>
        {menuLinks.map((item) => (
          <Fragment key={item.title}>
            <li
              className={clsx("rounded-xl", {
                "bg-primary-light text-primary-1 dark:bg-primary-1 dark:text-white font-medium":
                  pathname === item.link,
                "text-dark3 dark:text-light3 hover:dark:bg-dark2 hover:bg-light2":
                  pathname !== item.link,
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
            {item.title === "Ecommerce" && (
              <div className="ml-4 mb-2 mt-5">
                <h1 className="text-small tracking-tight text-gray-400 dark:text-slate-500">
                  Management
                </h1>
              </div>
            )}
            {item.title === "Add Blog" && (
              <div className="ml-4 mb-2 mt-5">
                <h1 className="text-small tracking-tight text-gray-400 dark:text-slate-500">
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

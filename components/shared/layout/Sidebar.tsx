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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// icons
import { LogoRegular } from "@/components/svg";
import { NavColor } from "@/types/shared";

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
          <LogoRegular className="ml-[20px] text-[40px]" />
        </Link>
      </div>
      <Accordion
        type="single"
        defaultValue="Overview"
        collapsible
        className="pt-[60px] px-4"
      >
        <AccordionItem value="Overview" className="border-none">
          <AccordionTrigger
            className="text-[12px] group-hover:translate-x-[5px] group-hover:text-black dark:group-hover:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500"
            rootClassName="relative justify-start p-[8px] pt-[16px] pl-[20px] group"
            arrowClassName="absolute left-1 hidden group-hover:flex group-hover:animate-fade group-hover:animate-duration-500 dark:text-white"
          >
            Overview
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {menuLinks.slice(0, 7).map((item) => (
                <MenuLink
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  navColor={navColor}
                  pathname={pathname}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        defaultValue="Management"
        collapsible
        className="px-4"
      >
        <AccordionItem value="Management" className="border-none">
          <AccordionTrigger
            className="text-[12px] group-hover:translate-x-[5px] group-hover:text-black dark:group-hover:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500"
            rootClassName="relative justify-start p-[8px] pt-[16px] pl-[20px] group"
            arrowClassName="absolute left-1 hidden group-hover:flex group-hover:animate-fade group-hover:animate-duration-500 dark:text-white"
          >
            Management
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {menuLinks.slice(7, 14).map((item) => (
                <MenuLink
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  navColor={navColor}
                  pathname={pathname}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        defaultValue="Settings"
        collapsible
        className="px-4"
      >
        <AccordionItem value="Settings" className="border-none">
          <AccordionTrigger
            className="text-[12px] group-hover:translate-x-[5px] group-hover:text-black dark:group-hover:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500"
            rootClassName="relative justify-start p-[8px] pt-[16px] pl-[20px] group"
            arrowClassName="absolute left-1 hidden group-hover:flex group-hover:animate-fade group-hover:animate-duration-500 dark:text-white"
          >
            Settings
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {menuLinks.slice(14, 16).map((item) => (
                <MenuLink
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  navColor={navColor}
                  pathname={pathname}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default Sidebar;

export const MenuLink = ({
  title,
  pathname,
  navColor,
  link,
  image,
}: {
  title: string;
  pathname: string;
  navColor: NavColor | null;
  link: string;
  image: JSX.Element;
}) => {
  return (
    <li
      className={clsx("rounded-lg ml-2 mb-1 Transition", {
        "hover:bg-primary-6 bg-primary-3 bg-opacity-10 text-primary-4 dark:bg-primary-6 dark:text-primary-5 font-medium":
          pathname === link && navColor === "Integrate",
        "text-icon-light dark:text-icon-dark hover:dark:bg-dark2 hover:bg-light3":
          pathname !== link && navColor === "Integrate",
        "text-slate-400 hover:bg-slate-600/30 dark:hover:bg-slate-600/30":
          pathname !== link && navColor === "Apparent",
        "text-primary-5 dark:bg-primary-6 bg-primary-6 dark:text-primary-5 font-medium":
          pathname === link && navColor === "Apparent",
      })}
    >
      <Link href={link} className="flex items-center gap-[15px] p-[10px]">
        <div className="text-icon-size">{image}</div>
        <span className="text-sm">{title}</span>
      </Link>
    </li>
  );
};

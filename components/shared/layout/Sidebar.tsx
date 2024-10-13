"use client";

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
import SidebarMenuLink from "./SidebarMenuLink";
import SidebarAccordionLinks from "./SidebarAccordionLinks";
// icons
import { LogoRegular } from "@/components/svg";

const Sidebar = () => {
  const pathname = usePathname();
  const { navColor } = useNavColor();

  // diffrent sidebar background colors based on "Integrate" or "Apparent"
  const sidebarBGColor =
    navColor === "Integrate"
      ? "bg-white dark:bg-dark1"
      : "bg-dark1 dark:bg-dark2";

  const accordionStyles = {
    // className's of wrapper of accordion trigger: including it's text and arrow icon
    rootClassName: "relative justify-start p-[8px] pt-[16px] pl-[18px] group",
    // className's of anything without arrow icon
    className: clsx(
      "text-[11px] transform group-hover:translate-x-[5px] group-hover:text-black dark:group-hover:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500",
      {
        "text-slate-500 group-hover:text-white": navColor === "Apparent",
      }
    ),
    // className's of arrow icon
    arrowClassName: clsx(
      "absolute left-1 hidden group-hover:flex group-hover:animate-fade group-hover:animate-duration-500 dark:text-white",
      {
        "text-slate-500 group-hover:text-white": navColor === "Apparent",
      }
    ),
  };

  return (
    <aside
      className={`${sidebarBGColor} w-[300px] max-md:hidden fixed z-40 left-0 h-screen border-r border-color overflow-y-auto sidebarScroll`}
    >
      <div
        className={`${sidebarBGColor} flex items-center justify-between fixed text-primary-1 border-r border-color p-4 top-0 w-[300px] z-20`}
      >
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <LogoRegular className="ml-[15px] text-[40px]" />
        </Link>
      </div>
      <Accordion
        type="single"
        defaultValue="Overview"
        collapsible
        className="px-4 pt-[70px]"
      >
        <AccordionItem value="Overview" className="border-none">
          <AccordionTrigger {...accordionStyles}>Overview</AccordionTrigger>
          <AccordionContent>
            <ul>
              {menuLinks.slice(0, 7).map((item) => (
                <SidebarMenuLink
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
          <AccordionTrigger {...accordionStyles}>Management</AccordionTrigger>
          <AccordionContent>
            <SidebarAccordionLinks
              isMobile={false}
              navColor={navColor}
              pathname={pathname}
            />
            <ul>
              {menuLinks.slice(14, 18).map((item) => (
                <SidebarMenuLink
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

"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// constants
import {
  sidebar_Accordions,
  sidebar_accordionTriggerStyles,
} from "@/constants";
// cmp
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SidebarMenuLink from "./SidebarMenuLink";
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

  return (
    <aside
      className={`${sidebarBGColor} w-[300px] max-md:hidden fixed z-40 left-0 h-screen border-r border-color overflow-y-auto sidebarScroll`}
    >
      <div
        className={`${sidebarBGColor} flex items-center justify-between fixed text-primary-1 border-r border-color p-4 top-0 w-[300px] z-20`}
      >
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <LogoRegular className="ml-[20px] text-[40px]" />
        </Link>
      </div>
      {sidebar_Accordions.map((accordion) => (
        <Accordion
          key={accordion.value}
          type="single"
          defaultValue={accordion.value}
          collapsible
          className={clsx("px-4", {
            "pt-[60px]": accordion.value === "Overview",
          })}
        >
          <AccordionItem value={accordion.value} className="border-none">
            <AccordionTrigger {...sidebar_accordionTriggerStyles(navColor)}>
              {accordion.value}
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {accordion.list.map((item) => (
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
      ))}
    </aside>
  );
};

export default Sidebar;

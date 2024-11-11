"use client";

// react
import { useEffect, useState } from "react";
// next
import Link from "next/link";
// types
import { NavColor } from "@/types/shared";
// constants
import { sidebar_accordionList } from "@/constants";
// cmp
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SidebarMenuLink from "./SidebarMenuLink";

const SidebarAccordionLinks = ({
  navColor,
  pathname,
  handleCloseSheet,
  isMobile = false,
}: {
  pathname: string;
  navColor: NavColor | null;
  handleCloseSheet?: () => void;
  isMobile: boolean;
}) => {
  const [activeLink, setActiveLink] = useState("");

  const onValueChange = (value: string) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const pathnames = pathname.split("/");
    const accordionValue = `/${pathnames[1]}`;

    setActiveLink(accordionValue);
  }, [pathname]);

  const arrowColor =
    navColor === "Integrate"
      ? "text-black dark:text-white"
      : "text-white dark:text-white";

  const onClick = () => {
    if (isMobile && handleCloseSheet) {
      handleCloseSheet();
    } else {
      return;
    }
  };

  return (
    <ul>
      <Accordion
        type="single"
        collapsible
        value={activeLink}
        onValueChange={onValueChange}
      >
        {sidebar_accordionList.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-none"
          >
            <AccordionTrigger
              rootClassName="p-0 relative"
              className="w-full"
              arrowClassName={`absolute right-2 dark:text-white ${arrowColor}`}
            >
              <SidebarMenuLink
                key={item.trigger.title}
                title={item.trigger.title}
                image={item.trigger.image}
                navColor={navColor}
                pathname={pathname}
                link={item.value}
                isLink={false}
              />
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <ul className="w-full space-y-1">
                {item.innerLinks.map((innerLink) => (
                  <li
                    key={innerLink.href}
                    className="w-full pl-8"
                    onClick={onClick}
                  >
                    <Link
                      href={innerLink.href}
                      className={clsx("w-full block p-2 rounded-lg", {
                        "bg-light2 dark:bg-dark3 dark:text-white hover:bg-light2 hover:dark:bg-dark3":
                          pathname === innerLink.href &&
                          navColor === "Integrate",
                        "text-slate-500 dark:text-slate-500 hover:bg-light2 hover:dark:bg-dark3":
                          pathname !== innerLink.href &&
                          navColor === "Integrate",
                        "bg-dark2 dark:bg-dark3 dark:text-white text-white hover:bg-dark3 hover:dark:bg-dark3":
                          pathname === innerLink.href &&
                          navColor === "Apparent",
                        "text-slate-500 dark:text-slate-500 hover:bg-dark3 hover:dark:bg-dark3":
                          pathname !== innerLink.href &&
                          navColor === "Apparent",
                      })}
                    >
                      {innerLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ul>
  );
};

export default SidebarAccordionLinks;

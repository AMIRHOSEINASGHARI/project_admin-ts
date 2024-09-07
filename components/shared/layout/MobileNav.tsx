"use client";

// react
import { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SidebarMenuLink from "./SidebarMenuLink";
import clsx from "clsx";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
// icons
import { LogoRegular, SolarHamburgerMenuLineDuotone } from "@/components/svg";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navColor } = useNavColor();

  const color =
    navColor === "Integrate"
      ? "bg-white/60 dark:bg-dark1/70 border-gray-200 dark:border-dark2"
      : "bg-dark1/90 dark:bg-dark2/40 border-gray-200 dark:border-dark2";

  const onOpenChange = () => {
    setOpen(!open);
  };

  const sheetContent = (
    <div>
      <div
        className={`flex items-center justify-between fixed text-primary-1 p-4 top-0 z-20 w-full`}
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
            "pt-[70px]": accordion.value === "Overview",
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
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="p-[8px] rounded-full hover:bg-light3 hover:dark:bg-slate-800 hover:text-slate-900 dark:text-icon-dark text-icon-light text-icon-size">
          <SolarHamburgerMenuLineDuotone />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={`backdrop-blur-2xl bg-black p-0 ${color}`}
      >
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

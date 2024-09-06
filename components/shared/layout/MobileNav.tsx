"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// constants
import { menuLinks } from "@/constants";
// cmp
import { MenuLink } from "./Sidebar";
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
      ? "bg-white/70 dark:bg-dark1/70 border-gray-200 dark:border-dark2"
      : "bg-dark1/90 dark:bg-dark3/70 border-gray-200 dark:border-dark2";

  const onOpenChange = () => {
    setOpen(!open);
  };

  const sheetContent = (
    <div>
      <div
        className={`flex items-center justify-between fixed text-primary-1 p-4 top-0 z-20 ${color}`}
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
            <ul onClick={() => setOpen(false)}>
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
            <ul onClick={() => setOpen(false)}>
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
            <ul onClick={() => setOpen(false)}>
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

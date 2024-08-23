"use client";

// react
import { Fragment, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// constants
import { menuLinks } from "@/constants";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
// icons
import {
  LogoRegular,
  MenuBarsRegular,
  SolarHamburgerMenuLineDuotone,
} from "@/components/svg";

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
      <Link
        href="/dashboard"
        className="flex items-center gap-[10px] text-primary-1"
      >
        <LogoRegular className="ml-[8px] text-[40px]" />
      </Link>
      <ul>
        <div className="ml-4 mb-2 mt-5">
          <h1 className="text-small tracking-tight text-gray-400 dark:text-slate-500">
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
                className="flex items-center gap-[15px] px-4 py-3"
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
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="p-[8px] rounded-full hover:bg-light3 hover:dark:bg-slate-800 hover:text-slate-900 dark:text-icon-dark text-icon-light text-icon-size">
          <SolarHamburgerMenuLineDuotone />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className={`backdrop-blur-2xl ${color}`}>
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

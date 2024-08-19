"use client";

// react
import { Fragment, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { LogoRegular, MenuBarsRegular } from "@/components/svg";

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
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="p-[12px] rounded-full text-icon hover:bg-light2 hover:dark:bg-slate-800 hover:text-slate-900 dark:text-light3">
          <MenuBarsRegular />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

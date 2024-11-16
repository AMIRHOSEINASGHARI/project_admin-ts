"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// constants
import { navbar_searchItems } from "@/constants";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";
// cmp
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
  </VisuallyHidden.Root>
);

const NavbarSearch = () => {
  const { isMobile, state } = useSidebar();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setQuery("");
    setOpen(!open);
  };
  const onClose = () => {
    setQuery("");
    setOpen(false);
  };

  const filteredData = navbar_searchItems.filter(
    (item) => item.link.includes(query) || item.title.includes(query)
  );

  const NotFound = () => (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h6 className="h6">Not found</h6>
      <p className="text-small">
        No results found for &quot;
        <span className="font-semibold">{query}</span>&quot;.
      </p>
      <p className="text-small">
        Try checking for typos or using complete words.
      </p>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <div
          className={clsx({
            "pl-[295px]": !isMobile && state === "expanded",
            "pl-[100px]": !isMobile && state === "collapsed",
          })}
        >
          <Button
            variant="icon"
            className="gap-3 xl:hover:bg-transparent dark:xl:hover:bg-transparent"
          >
            <SolarMinimalisticMagniferBoldDuotone />
            <span className="text-small text-slate-500 max-xl:hidden">
              Search...
            </span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        <HiddenTags />
        <div className="relative w-full h-full">
          <div className="p-6 absolute z-10 top-0 left-0 right-0 w-full bg-white dark:bg-dark3 border-b border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2">
              <div className="w-fit flex shrink-0">
                <SolarMinimalisticMagniferBoldDuotone className="icon" />
              </div>
              <input
                placeholder="Search..."
                className="w-full bg-transparent dark:bg-transparent border-none outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full h-full overflow-auto min-h-[300px] max-h-[500px] px-6 pb-6 pt-[90px] hideScrollBar">
            {filteredData.length !== 0 ? (
              filteredData.map(({ link, title }) => (
                <Link
                  key={link}
                  href={link}
                  className="flex flex-col border border-transparent border-dashed hover:border-primary-1 dark:border-transparent dark:hover:border-primary-1 hover:bg-primary-4 dark:hover:bg-primary-6 py-2 px-3 rounded-lg Transition"
                  onClick={onClose}
                >
                  <span className="text-small font-semibold">{title}</span>
                  <span className="text-small text-[var(--text-disabled)]">
                    {link}
                  </span>
                </Link>
              ))
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NavbarSearch;

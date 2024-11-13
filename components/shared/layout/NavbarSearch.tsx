"use client";

// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import clsx from "clsx";

const NavbarSearch = () => {
  const { isMobile, state } = useSidebar();

  return (
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
  );
};

export default NavbarSearch;

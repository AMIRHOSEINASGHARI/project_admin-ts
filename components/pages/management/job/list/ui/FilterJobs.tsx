"use client";

// react
import { useState } from "react";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
// icons
import { Separator } from "@/components/ui/separator";
// icons
import { CrossRegular } from "@/components/svg";

// icons
import { SolarFilterBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const FilterJobs = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  const sheetContent = (
    <div>
      <div className="flex items-center justify-between p-4">
        <span className="bold-value-2 dark:text-light1">Settings</span>
        <Button variant="icon" onClick={onClose} className="text-small">
          <CrossRegular />
        </Button>
      </div>
      <Separator />
      {/* // TODO: Filter jobs */}
      <div className="p-4"></div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <div className="flex max-xl:justify-end max-xl:w-full">
        <Button type="button" variant="action" onClick={onOpen}>
          <span>Filters</span>
          <SolarFilterBoldDuotone className="text-icon-light dark:text-icon-dark text-lg" />
        </Button>
      </div>
      <SheetContent className="p-0">
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default FilterJobs;

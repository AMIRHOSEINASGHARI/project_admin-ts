"use client";

// react
import { useState } from "react";
// icons
import { SolarAltArrowDownLineDuotone } from "@/components/svg";
// cmp
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <DialogDescription></DialogDescription>
  </VisuallyHidden.Root>
);

const DateFilterFiles = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button type="button" variant="action">
          Select date <SolarAltArrowDownLineDuotone className="text-xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full xl:max-w-fit">
        <DialogHeader>
          <DialogTitle>Select date range</DialogTitle>
          <HiddenTags />
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 xl:flex-row">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            className="rounded-card border border-border-light dark:border-border-dark"
          />
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            className="rounded-card border border-border-light dark:border-border-dark"
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button">Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DateFilterFiles;

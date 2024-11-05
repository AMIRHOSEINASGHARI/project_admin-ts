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
import { files } from "@/constants";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
  </VisuallyHidden.Root>
);

const TypeFilterFiles = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  const uniqueFiles = files.filter(
    (file, index, self) => index === self.findIndex((f) => f.type === file.type)
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button type="button" variant="action">
          Types <SolarAltArrowDownLineDuotone className="text-xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full xl:max-w-fit">
        <HiddenTags />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {uniqueFiles.map(({ id, icon, type }) => (
            <Button key={id} variant="outline" className="gap-3 justify-start">
              <div className="text-[25px]">{icon}</div>
              <span className="capitalize text-small font-light">{type}</span>
            </Button>
          ))}
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

export default TypeFilterFiles;

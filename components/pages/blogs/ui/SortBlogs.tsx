"use client";

// react
import { useState } from "react";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBlogs = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="flex max-lg:justify-end">
      <Select defaultValue="Latest" open={open} onOpenChange={onOpenChange}>
        <SelectTrigger className="h-fit min-w-[150px] flex flex-1 rounded-md border-none bg-white dark:bg-transparent dark:text-light3 text-sm">
          <SelectValue placeholder="Sort by: Latest" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Latest">{!open && "Sort by "}Latest</SelectItem>
          <SelectItem value="Popular">{!open && "Sort by "}Popular</SelectItem>
          <SelectItem value="Oldest">{!open && "Sort by "}Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBlogs;

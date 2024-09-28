"use client";

// react
import { useState } from "react";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const SortBlogs = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Latest");

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="flex max-lg:justify-end">
      <Select
        defaultValue="Latest"
        open={open}
        onOpenChange={onOpenChange}
        value={value}
        onValueChange={(e) => setValue(e)}
      >
        <SelectTrigger className="h-fit min-w-[150px] flex flex-1 rounded-md border-none bg-white dark:bg-transparent dark:text-light3 text-sm">
          Sort by: {value}
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

"use client";

// react
import { useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const SortBlogs = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("Latest");
  const { handleSetQuery } = useHandleSearchParams("sort", setSort);

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="flex max-lg:justify-end">
      <Select
        defaultValue="Latest"
        open={open}
        onOpenChange={onOpenChange}
        onValueChange={(e) => handleSetQuery(e)}
        value={sort}
      >
        <SelectTrigger className="h-fit min-w-[150px] flex flex-1 rounded-md border-none bg-white dark:bg-transparent dark:text-light3 text-sm">
          Sort by: {sort}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Latest">{!open && "Sort by "}Latest</SelectItem>
          <SelectItem value="Oldest">{!open && "Sort by "}Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBlogs;

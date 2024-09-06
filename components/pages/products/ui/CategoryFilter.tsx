"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productCategory } from "@/constants";

const CategoryFilter = () => {
  return (
    <Select>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {productCategory.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <div className="flex items-center gap-2">
              <div className="text-xl text-icon-light dark:text-icon-dark">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;

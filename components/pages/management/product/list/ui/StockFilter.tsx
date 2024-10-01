"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StockFilter = () => {
  return (
    <Select>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="Stock" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="in-stock">In stock</SelectItem>
        <SelectItem value="out-of-stock">Out of stock</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StockFilter;

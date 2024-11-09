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
  SelectValue,
} from "@/components/ui/select";

const StockFilter = () => {
  const [stock, setStock] = useState("");
  const { handleSetQuery } = useHandleSearchParams("stock", setStock);

  return (
    <Select value={stock} onValueChange={(e) => handleSetQuery(e)}>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="Stock" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="in-stock">In stock</SelectItem>
        <SelectItem value="low-stock">Low stock</SelectItem>
        <SelectItem value="out-of-stock">Out of stock</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StockFilter;

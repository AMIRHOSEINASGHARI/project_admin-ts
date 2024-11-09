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

const DiscountFilter = () => {
  const [discount, setDiscount] = useState("");
  const { handleSetQuery } = useHandleSearchParams("discount", setDiscount);

  return (
    <Select onValueChange={(e) => handleSetQuery(e)} value={discount}>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 min-w-[250px] rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="discount" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="has-discount">Has discount</SelectItem>
        <SelectItem value="no-discount">No discount</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DiscountFilter;

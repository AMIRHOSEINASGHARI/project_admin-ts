"use client";

// react
import { useEffect, useState } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleDiscount = (discount: string) => {
    const params = new URLSearchParams(searchParams);

    if (discount) {
      params.set("discount", discount);
    } else {
      params.delete("discount");
    }

    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("discount")) {
      setDiscount("");
    } else {
      setDiscount(searchParams.get("discount")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Select onValueChange={(e) => handleDiscount(e)} value={discount}>
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

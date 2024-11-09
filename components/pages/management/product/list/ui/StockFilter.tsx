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

const StockFilter = () => {
  const [stock, setStock] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleStock = (stock: string) => {
    const params = new URLSearchParams(searchParams);

    if (stock) {
      params.set("stock", stock);
    } else {
      params.delete("stock");
    }

    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("stock")) {
      setStock("");
    } else {
      setStock(searchParams.get("stock")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Select onValueChange={(e) => handleStock(e)} value={stock}>
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

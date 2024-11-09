"use client";

// react
import { useEffect, useState } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// constants
import { productCategory } from "@/constants";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryFilter = () => {
  const [category, setCategory] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("category")) {
      setCategory("");
    } else {
      setCategory(searchParams.get("category")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Select onValueChange={(e) => handleCategory(e)} value={category}>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 min-w-[250px] xl:w-1/2 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
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

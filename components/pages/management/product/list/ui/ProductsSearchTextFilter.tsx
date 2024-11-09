"use client";

// react
import { useState } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// debounce
import { useDebouncedCallback } from "use-debounce";
// cmp
import { Input } from "@/components/ui/input";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";

const ProductsSearchTextFilter = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term?.trim()) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 min-w-[250px] xl:w-1/2">
      <Input
        placeholder="Search..."
        className="w-full h-full pl-[45px]"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <div className="absolute top-[13px] left-[15px] icon">
        <SolarMinimalisticMagniferBoldDuotone />
      </div>
    </div>
  );
};

export default ProductsSearchTextFilter;

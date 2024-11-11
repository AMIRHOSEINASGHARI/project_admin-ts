"use client";

// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// debounce
import { useDebouncedCallback } from "use-debounce";
// cmp
import { Input } from "@/components/ui/input";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";

const BlogsSearchTextFilter = () => {
  const { handleSetQuery, searchParams } = useHandleSearchParams("search");
  const [query, setQuery] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    handleSetQuery(term);
  }, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("search")) {
      setQuery("");
    } else {
      setQuery(searchParams.get("search")?.toString()!);
    }
  }, [searchParams]);

  return (
    <div className="relative flex w-full lg:w-[300px]">
      <Input
        placeholder="Search..."
        className="w-full h-full pl-[45px]"
        value={query}
        onChange={(e) => {
          setQuery(() => e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <div className="absolute top-[13px] left-[15px] icon">
        <SolarMinimalisticMagniferBoldDuotone />
      </div>
    </div>
  );
};

export default BlogsSearchTextFilter;

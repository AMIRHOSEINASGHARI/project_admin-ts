"use client";

// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";
// cmp
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

const SearchJobs = () => {
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
    <div className="relative w-full xl:w-[300px]">
      <Input
        placeholder="Search..."
        className="w-full pl-[40px]"
        value={query}
        onChange={(e) => {
          setQuery(() => e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <SolarMinimalisticMagniferBoldDuotone className="icon absolute top-[14px] left-3" />
    </div>
  );
};

export default SearchJobs;

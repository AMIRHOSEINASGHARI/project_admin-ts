"use client";

// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// debounce
import { useDebouncedCallback } from "use-debounce";
// icons
import {
  SolareExportBoldDuotone,
  SolarImportBoldDuotone,
  SolarMinimalisticMagniferBoldDuotone,
  SolarOverflowMenuVertical,
  SolarPrinterMinimalisticBoldDuotone,
} from "@/components/svg";
// cmp
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchUser = () => {
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
    <div className="w-full xl:w-[70%] flex items-center justify-between gap-5">
      <div className="relative w-full">
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
      <DropdownMenu>
        <DropdownMenuTrigger className="btn_icon">
          <SolarOverflowMenuVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          <DropdownMenuItem
            className="cursor-pointer"
            icon={<SolarPrinterMinimalisticBoldDuotone />}
          >
            Print
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            icon={<SolarImportBoldDuotone />}
          >
            Import
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            icon={<SolareExportBoldDuotone />}
          >
            Export
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchUser;

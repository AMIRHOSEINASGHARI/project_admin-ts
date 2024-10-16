"use client";

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
  return (
    <div className="w-full xl:w-[70%] flex items-center justify-between gap-5">
      <div className="relative w-full">
        <Input placeholder="Search..." className="w-full pl-[40px]" />
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

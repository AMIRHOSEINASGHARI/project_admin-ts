// cmp
import {
  SolareExportBoldDuotone,
  SolarImportBoldDuotone,
  SolarOverflowMenuVertical,
  SolarPrinterMinimalisticBoldDuotone,
} from "@/components/svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const OtherActions = () => {
  return (
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
  );
};

export default OtherActions;

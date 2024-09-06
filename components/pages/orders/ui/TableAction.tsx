// next
import Link from "next/link";
// cmp
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// icons
import {
  SolarEyeBoldDuotone,
  SolarOverflowMenuVertical,
  SolarTrashBinTrashBoldDuotone,
} from "@/components/svg";

const TableAction = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SolarOverflowMenuVertical className="text-table-icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem
          className="text-error-light dark:text-error-dark cursor-pointer"
          icon={
            <SolarTrashBinTrashBoldDuotone className="text-error-light dark:text-error-dark" />
          }
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/orders/${id}`}
            className="w-full flex items-center gap-dropdownItem"
          >
            <SolarEyeBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
            View
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableAction;

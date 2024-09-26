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
  SolarPenBoldDuotone,
  SolarTrashBinTrashBoldDuotone,
} from "@/components/svg";

const ProductTableActions = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SolarOverflowMenuVertical className="text-table-icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem>
          <Link
            href={`/products/${id}`}
            className="w-full flex items-center gap-dropdownItem"
          >
            <SolarEyeBoldDuotone className="icon" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/products/${id}/edit`}
            className="w-full flex items-center gap-dropdownItem"
          >
            <SolarPenBoldDuotone className="icon" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-error-light dark:text-error-dark cursor-pointer"
          icon={
            <SolarTrashBinTrashBoldDuotone className="text-error-light dark:text-error-dark" />
          }
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductTableActions;

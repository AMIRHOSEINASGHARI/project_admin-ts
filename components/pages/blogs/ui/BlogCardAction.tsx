// next
import Link from "next/link";
// cmp
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
// icons
import {
  SolarEyeBoldDuotone,
  SolarOverflowMenuVertical,
  SolarPenBoldDuotone,
  SolarTrashBinTrashBoldDuotone,
} from "@/components/svg";

const BlogCardActions = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="icon">
          <SolarOverflowMenuVertical className="transform rotate-90" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuItem>
          <Link
            href={`/blogs/${id}`}
            className="w-full flex items-center gap-dropdownItem"
          >
            <SolarEyeBoldDuotone className="icon" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/blogs/${id}/edit`}
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

export default BlogCardActions;

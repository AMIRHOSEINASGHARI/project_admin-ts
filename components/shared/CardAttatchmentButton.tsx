// next
import Link from "next/link";
// cmp
import { Button } from "../ui/button";
// icon
import { AngleRightRegular } from "../svg";

const CardAttatchmentButton = ({
  title = "View all",
  icon = <AngleRightRegular className="text-lg" />,
  href = "#",
  variant = "action",
}: {
  title?: string;
  icon?: JSX.Element;
  href?: string;
  variant?:
    | "icon"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "action"
    | null
    | undefined;
}) => {
  return (
    <Button variant={variant} className="text-small font-semibold">
      <Link href={href} className="flex items-center gap-1">
        <span>{title}</span>
        {icon}
      </Link>
    </Button>
  );
};

export default CardAttatchmentButton;

// next
import Link from "next/link";
// types
import { OrderStatus } from "@/types/order";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import moment from "moment";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";

type HeadingProps = {
  id: string;
  status: OrderStatus;
  createdAt: Date;
};

const Heading = ({ id, status, createdAt }: HeadingProps) => {
  const badgeVariant =
    status === "Pending"
      ? "orange"
      : status === "Completed"
      ? "green"
      : status === "Canceled"
      ? "rose"
      : "gray";

  return (
    <div className="flex gap-2 items-start mb-page-heading">
      <Button asChild variant="icon" className="text-md">
        <Link href="/orders">
          <SolarAltArrowLeftLineDuotone />
        </Link>
      </Button>
      <div>
        <div className="flex items-center gap-2">
          <h1 className="bold-value">Order #{shorterText(id, 5, false)}</h1>
          <Badge variant={badgeVariant}>{status}</Badge>
        </div>
        <span className="text-small text-[var(--text-disabled)]">
          {moment(createdAt).format("LLL")}
        </span>
      </div>
    </div>
  );
};

export default Heading;

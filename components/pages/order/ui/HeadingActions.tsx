"use client";

// react
import { useState } from "react";
// icons
import {
  SolarPenBoldDuotone,
  SolarPrinterMinimalisticBoldDuotone,
} from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import { OrderStatus } from "@/types/order";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type HeadingActionsProps = {
  id: string;
  status: OrderStatus;
};

const HeadingActions = ({ id, status }: HeadingActionsProps) => {
  const [showStatus, setShowStatus] = useState<OrderStatus>(status);

  return (
    <div className="flex w-full items-center justify-end flex-wrap gap-3 mb-page-heading">
      <Select
        value={showStatus}
        onValueChange={(value: OrderStatus) => setShowStatus(value)}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="Canceled">Canceled</SelectItem>
          <SelectItem value="Refunded">Refunded</SelectItem>
        </SelectContent>
      </Select>
      <Button className="gap-3 font-bold" variant="outline">
        <SolarPrinterMinimalisticBoldDuotone className="text-[20px] text-icon-light dark:text-icon-dark" />
        <span>Print</span>
      </Button>
      <Button className="gap-3 font-bold">
        <SolarPenBoldDuotone className="text-[20px]" />
        <span>Edit</span>
      </Button>
    </div>
  );
};

export default HeadingActions;

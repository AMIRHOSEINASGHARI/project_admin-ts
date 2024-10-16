"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// types
import { AdminStatus } from "@/types/admin";
// icons
import {
  SolarOverflowMenuVertical,
  SolarPenBoldDuotone,
  SolarTrashBinTrashBoldDuotone,
} from "@/components/svg";
// cmp
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";

const TableActions = ({ id, status }: { id: string; status: AdminStatus }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = (value: AdminStatus) => {
    onClose();
  };

  const statusButtons: { value: AdminStatus; isActive: boolean }[] = [
    {
      value: "Active",
      isActive: status === "Active",
    },
    {
      value: "Banned",
      isActive: status === "Banned",
    },
    {
      value: "Pending",
      isActive: status === "Pending",
    },
    {
      value: "Rejected",
      isActive: status === "Rejected",
    },
  ];

  return (
    <div className="flex items-center gap-1">
      <Button variant="icon" asChild>
        <Link href={`/user/${id}/edit`}>
          <SolarPenBoldDuotone />
        </Link>
      </Button>
      <DropdownMenu open={open} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger className="btn_icon">
          <SolarOverflowMenuVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" className="space-y-1">
          {statusButtons.map((item) => (
            <DropdownMenuItem
              key={item.value}
              className={clsx(
                "cursor-pointer",
                item.isActive && "bg-slate-200 dark:bg-slate-700"
              )}
              onClick={() => onClick(item.value)}
            >
              {item.value}
            </DropdownMenuItem>
          ))}
          <Separator className="dark:bg-slate-700" />
          <DropdownMenuItem
            className="cursor-pointer text-rose-500 dark:text-rose-500"
            icon={<SolarTrashBinTrashBoldDuotone className="text-rose-500" />}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TableActions;

"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// types
import { AdminStatus } from "@/types/admin";
// react query
import { useMutation } from "@tanstack/react-query";
// actions
import { deleteUser, editUserStatus } from "@/actions/admin";
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
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const TableActions = ({ id, status }: { id: string; status: AdminStatus }) => {
  const [open, setOpen] = useState(false);
  const { isLoading: isStatusLoading, mutate: mutateStatus } = useMutation({
    mutationFn: editUserStatus,
  });
  const { isLoading: isDeleteLoading, mutate: mutateDelete } = useMutation({
    mutationFn: deleteUser,
  });

  const onOpenChange = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleUser = (value: AdminStatus | "Delete") => {
    if (value === "Delete") {
      // mutateDelete(id, {
      //   onSuccess: (data) => {
      //     toast.success(data?.message);
      //     onClose();
      //   },
      //   onError: (error: any) => {
      //     toast.error(error.message);
      //   },
      // });
    } else {
      if (value === status) {
        onClose();
        return;
      }

      const data = {
        userId: id,
        status: value,
      };

      mutateStatus(data, {
        onSuccess: (data) => {
          toast.success(data?.message);
          onClose();
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });
    }
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
                item.isActive && "bg-slate-200 dark:bg-slate-700",
                isStatusLoading || (isDeleteLoading && "flex justify-center")
              )}
              onClick={() => handleUser(item.value)}
              disabled={isStatusLoading || isDeleteLoading}
              onSelect={(e) => e.preventDefault()}
            >
              {item.value}
            </DropdownMenuItem>
          ))}
          <Separator className="dark:bg-slate-700" />
          <DropdownMenuItem
            className={clsx(
              "cursor-pointer text-rose-500 dark:text-rose-500",
              isStatusLoading || (isDeleteLoading && "flex justify-center")
            )}
            icon={
              !isDeleteLoading || !isDeleteLoading ? (
                <SolarTrashBinTrashBoldDuotone className="text-rose-500" />
              ) : undefined
            }
            onClick={() => handleUser("Delete")}
            disabled={isStatusLoading || isDeleteLoading}
            onSelect={(e) => e.preventDefault()}
          >
            {isStatusLoading || isDeleteLoading ? <Loader /> : "Delete"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TableActions;

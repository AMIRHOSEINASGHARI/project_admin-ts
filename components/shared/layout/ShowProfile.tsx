"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
// constants
import { images } from "@/constants";
// hooks
import useSession from "@/hooks/session";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import SignoutButton from "../SignoutButton";
// icons
import {
  SolarAddFolderBoldDuotone,
  SolarChecklistMinimalisticBoldDuotone,
  SolarHanger2BoldDuotone,
  SolarHomeAngleBoldDuotone,
  SolarUserCircleBoldDuotone,
} from "@/components/svg";
import Loader from "../Loader";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const ShowProfile = () => {
  const [open, setOpen] = useState(false);
  const { data, error, isError, isLoading } = useSession();

  const onOpenChange = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const links = [
    {
      icon: <SolarHomeAngleBoldDuotone />,
      name: "Home",
      href: "/dashboard",
    },
    {
      icon: <SolarUserCircleBoldDuotone />,
      name: "Profile",
      href: "/user/account",
    },
    {
      icon: <SolarChecklistMinimalisticBoldDuotone />,
      name: "Kanban",
      href: "/kanban",
    },
    {
      icon: <SolarHanger2BoldDuotone />,
      name: "Products",
      href: "/product/list",
    },
    {
      icon: <SolarAddFolderBoldDuotone />,
      name: "New Product",
      href: "/product/create",
    },
  ];

  const sheetContent = (
    <div>
      <div className="pb-[80px]">
        {isLoading && (
          <div className="w-full flex justify-center my-5">
            <Loader />
          </div>
        )}
        {isError && <span>Error!</span>}
        {data && !isError && !isLoading && (
          <div className="flex flex-col items-center justify-center">
            <Image
              src={data?.session?.avatar || images.admin}
              width={200}
              height={200}
              alt="user"
              className="w-[100px] h-[100px] mb-2 rounded-full"
            />
            <span className="font-medium text-base dark:text-light1">
              {data?.session?.username}
            </span>
            <span className="text-darkGray mb-2 text-small dark:text-light3">
              {data?.session?.name}
            </span>
            <Badge>{data?.session?.roll}</Badge>
          </div>
        )}
        <Separator className="my-5" />
        <ul className="space-y-2">
          {links.map((link) => (
            <li
              key={link.name}
              className="rounded-xl text-dark3 dark:text-light3 hover:dark:bg-dark3 hover:bg-light2"
            >
              <Link
                href={link.href}
                className="flex items-center gap-5 px-2 py-3 rounded-btn hoverable"
                onClick={() => onClose()}
              >
                <div className="icon">{link.icon}</div>
                <span className="text-small">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white dark:bg-dark2/50 backdrop-blur-sm absolute bottom-0 right-0 left-0 p-3">
        <SignoutButton
          title="Logout"
          variant="destructive"
          classNames="w-full"
        />
      </div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <Avatar>
          <AvatarImage src={data?.session?.avatar || images.admin} />
          <AvatarFallback>
            <Skeleton className="h-12 w-12 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default ShowProfile;

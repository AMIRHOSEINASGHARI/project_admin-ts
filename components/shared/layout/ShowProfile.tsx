"use client";

// react
import { Fragment, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// constants
import { images, menuLinks } from "@/constants";
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
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
// icons
import {
  HomeRegular,
  LogoRegular,
  MenuBarsRegular,
  PlusRegular,
  SettingsSlidersRegular,
  ShopRegular,
  SolarAddFolderBoldDuotone,
  SolarChecklistMinimalisticBoldDuotone,
  SolarHanger2BoldDuotone,
  SolarHomeAngleBoldDuotone,
  SolarUserCircleBoldDuotone,
  TodoAltRegular,
} from "@/components/svg";
import { Skeleton } from "@/components/ui/skeleton";
import SignoutButton from "../SignoutButton";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
      href: "/account",
    },
    {
      icon: <SolarChecklistMinimalisticBoldDuotone />,
      name: "Tasks",
      href: "/tasks",
    },
    {
      icon: <SolarHanger2BoldDuotone />,
      name: "Products",
      href: "/products",
    },
    {
      icon: <SolarAddFolderBoldDuotone />,
      name: "New Product",
      href: "/add-product",
    },
  ];

  const sheetContent = (
    <div>
      <div className="pb-[80px]">
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
                <div className="text-icon-size text-icon-light dark:text-icon-dark">
                  {link.icon}
                </div>
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

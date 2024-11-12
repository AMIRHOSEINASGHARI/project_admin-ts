"use client";

// react
import { useEffect, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// types
import { MenuLinksProps } from "@/types/components";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// icons
import { SolarAltArrowRightLineDuotone } from "@/components/svg";
// cmp
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import clsx from "clsx";

const SidebarMenuLink = ({
  title,
  link,
  image,
  isCollapsible = false,
  innerLinks,
}: MenuLinksProps) => {
  const pathname = usePathname();
  const { navColor } = useNavColor();
  const { isMobile, setOpenMobile } = useSidebar();
  const [open, setOpen] = useState(false);

  const onOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (pathname.includes(link)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname, link]);

  if (isCollapsible) {
    return (
      <Collapsible
        className="group/collapsible"
        open={open}
        onOpenChange={onOpenChange}
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className={clsx("flex justify-between w-full group/collapsible", {
                "data-[active=true]:text-primary-5 data-[active=true]:dark:bg-primary-6 data-[active=true]:bg-primary-6 data-[active=true]:dark:text-primary-5 data-[active=true]:hover:bg-primary-6 data-[active=true]:hover:text-primary-5":
                  pathname?.includes(link) && navColor === "Apparent",
                "hover:bg-dark3 hover:text-white dark:hover:text-white data-[state=open]:hover:bg-dark3 data-[state=open]:hover:text-white":
                  !pathname?.includes(link) && navColor === "Apparent",
                "dark:hover:bg-dark3 dark:hover:text-white":
                  !pathname?.includes(link) && navColor === "Integrate",
              })}
              isActive={pathname.includes(link)}
            >
              <div className="flex items-center gap-3">
                <div className="text-icon-size">{image}</div>
                <span>{title}</span>
              </div>
              <SolarAltArrowRightLineDuotone className="group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {innerLinks?.map((inner) => (
                <SidebarMenuSubItem key={inner.href}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={pathname === inner.href}
                    className={clsx({
                      "data-[active=true]:text-white data-[active=true]:bg-dark3":
                        pathname === inner.href && navColor === "Apparent",
                      "text-icon-light dark:text-icon-dark hover:bg-dark2 hover:text-white dark:hover:bg-dark3":
                        pathname !== inner.href && navColor === "Apparent",
                    })}
                  >
                    <Link href={inner.href}>{inner.title}</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  } else {
    return (
      <SidebarMenuItem
        onClick={() => {
          isMobile && setOpenMobile(false);
        }}
      >
        <SidebarMenuButton
          asChild
          className={clsx("w-full h-full", {
            "data-[active=true]:text-primary-5 data-[active=true]:dark:bg-primary-6 data-[active=true]:bg-primary-6 data-[active=true]:dark:text-primary-5":
              pathname?.includes(link) && navColor === "Apparent",
            "hover:bg-dark3 hover:text-white dark:hover:text-white":
              !pathname?.includes(link) && navColor === "Apparent",
            "dark:hover:bg-dark3 dark:hover:text-white":
              !pathname?.includes(link) && navColor === "Integrate",
          })}
          isActive={pathname.includes(link)}
        >
          <Link href={link}>
            <div className="text-icon-size">{image}</div>
            <span>{title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};
export default SidebarMenuLink;

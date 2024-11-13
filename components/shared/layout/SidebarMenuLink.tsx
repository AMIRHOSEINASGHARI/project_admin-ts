"use client";

// react
import { useEffect, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// types
import {
  CollapsibleMenuProps,
  InnerLinkProps,
  MenuLinksProps,
} from "@/types/components";
// providers
import { useNavColor } from "@/providers/ThemeProvider";
// icons
import { SolarAltArrowRightLineDuotone } from "@/components/svg";
// cmp
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  const { isMobile, setOpenMobile, state } = useSidebar();
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

  if ((isCollapsible && state === "expanded") || (isCollapsible && isMobile)) {
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
            {innerLinks && (
              <SidebarMenuSub>
                {innerLinks?.map((inner) => (
                  <InnerLink
                    key={inner.href}
                    href={inner.href}
                    title={inner.title}
                    pathname={pathname}
                    navColor={navColor}
                  />
                ))}
              </SidebarMenuSub>
            )}
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  if (isCollapsible && state === "collapsed" && !isMobile) {
    return (
      <CollapsibleMenu
        image={image}
        title={title}
        state={state}
        link={link}
        pathname={pathname}
        navColor={navColor}
        innerLinks={innerLinks}
      />
    );
  }

  if (!isCollapsible) {
    return (
      <li
        onClick={() => {
          isMobile ? setOpenMobile(false) : null;
        }}
        className={clsx(
          state === "collapsed" &&
            "flex items-center justify-center w-full h-full"
        )}
      >
        <Link
          href={link}
          data-nav-color={navColor}
          data-isactive={pathname?.includes(link)}
          data-state={state}
          className={clsx({
            "p-2 gap-1 items-center data-[state=expanded]:py-2.5 data-[state=expanded]:px-3 data-[state=expanded]:gap-3 data-[state=collapsed]:flex-col data-[state=collapsed]:justify-center":
              !isMobile,
            "items-center py-2.5 px-3 gap-3": isMobile,
            "group w-full h-full flex rounded-lg Transition data-[nav-color=Integrate]:data-[isactive=false]:hover:bg-light2 data-[nav-color=Integrate]:data-[isactive=false]:dark:text-icon-dark data-[nav-color=Integrate]:data-[isactive=false]:text-icon-dark3 data-[nav-color=Integrate]:data-[isactive=false]:dark:hover:bg-dark3 data-[nav-color=Integrate]:data-[isactive=false]:dark:hover:text-white data-[nav-color=Integrate]:data-[isactive=true]:bg-primary-4 data-[nav-color=Integrate]:data-[isactive=true]:dark:bg-primary-6 data-[nav-color=Integrate]:data-[isactive=true]:text-primary-2 data-[nav-color=Integrate]:data-[isactive=true]:dark:text-primary-4 data-[nav-color=Apparent]:data-[isactive=true]:text-primary-5 data-[nav-color=Apparent]:data-[isactive=true]:dark:bg-primary-6 data-[nav-color=Apparent]:data-[isactive=true]:bg-primary-6 data-[nav-color=Apparent]:data-[isactive=true]:dark:text-primary-5 data-[nav-color=Apparent]:data-[isactive=false]:text-icon-dark data-[nav-color=Apparent]:data-[isactive=false]:dark:text-icon-dark data-[nav-color=Apparent]:data-[isactive=false]:hover:bg-dark3 data-[nav-color=Apparent]:data-[isactive=false]:dark:hover:bg-dark3 data-[nav-color=Apparent]:data-[isactive=false]:hover:text-white data-[nav-color=Apparent]:data-[isactive=false]:dark:hover:text-white":
              true,
          })}
        >
          <div
            className={clsx({
              "group-data-[state=expanded]:text-icon-size group-data-[state=collapsed]:text-xl group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-light dark:group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-dark":
                !isMobile,
              "text-icon-size group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-light dark:group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-dark":
                isMobile,
            })}
          >
            {image}
          </div>
          <span
            className={clsx({
              "whitespace-nowrap group-data-[state=expanded]:text-small group-data-[state=collapsed]:text-x-small":
                !isMobile,
              "whitespace-nowrap text-small": isMobile,
            })}
          >
            {title}
          </span>
        </Link>
      </li>
    );
  }
};

export default SidebarMenuLink;

const InnerLink = ({ href, title, pathname, navColor }: InnerLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        data-nav-color={navColor}
        data-isactive={pathname === href}
        className="w-full block px-2 py-1 rounded-lg Transition data-[nav-color=Integrate]:data-[isactive=true]:bg-light3 dark:data-[nav-color=Integrate]:data-[isactive=true]:bg-dark2 data-[nav-color=Integrate]:data-[isactive=false]:text-icon-light dark:data-[nav-color=Integrate]:data-[isactive=false]:text-icon-dark data-[nav-color=Apparent]:data-[isactive=true]:bg-dark3 data-[nav-color=Apparent]:data-[isactive=true]:text-white dark:data-[nav-color=Apparent]:data-[isactive=true]:bg-dark1 data-[nav-color=Apparent]:data-[isactive=false]:text-icon-light dark:data-[nav-color=Apparent]:data-[isactive=false]:text-icon-dark"
      >
        {title}
      </Link>
    </li>
  );
};

const CollapsibleMenu = ({
  image,
  title,
  pathname,
  navColor,
  state,
  link,
  innerLinks,
}: CollapsibleMenuProps) => {
  const [open, setOpen] = useState(false);

  if (state !== "collapsed") return null;

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <li className="flex items-center justify-center w-full h-full relative cursor-pointer">
          <div
            data-nav-color={navColor}
            data-isactive={pathname.includes(link)}
            data-state={state}
            className="
              group w-full h-full flex rounded-lg Transition
            data-[nav-color=Integrate]:data-[isactive=false]:hover:bg-light2 data-[nav-color=Integrate]:data-[isactive=false]:dark:text-icon-dark data-[nav-color=Integrate]:data-[isactive=false]:text-icon-dark3 data-[nav-color=Integrate]:data-[isactive=false]:dark:hover:bg-dark3 data-[nav-color=Integrate]:data-[isactive=false]:dark:hover:text-white
              data-[nav-color=Integrate]:data-[isactive=true]:bg-primary-4 data-[nav-color=Integrate]:data-[isactive=true]:dark:bg-primary-6 data-[nav-color=Integrate]:data-[isactive=true]:text-primary-2 data-[nav-color=Integrate]:data-[isactive=true]:dark:text-primary-4
              data-[nav-color=Apparent]:data-[isactive=true]:text-primary-5 data-[nav-color=Apparent]:data-[isactive=true]:dark:bg-primary-6 data-[nav-color=Apparent]:data-[isactive=true]:bg-primary-6 data-[nav-color=Apparent]:data-[isactive=true]:dark:text-primary-5
            data-[nav-color=Apparent]:data-[isactive=false]:text-icon-dark data-[nav-color=Apparent]:data-[isactive=false]:dark:text-icon-dark data-[nav-color=Apparent]:data-[isactive=false]:hover:bg-dark3 data-[nav-color=Apparent]:data-[isactive=false]:dark:hover:bg-dark3 data-[nav-color=Apparent]:data-[isactive=false]:hover:text-white data-[nav-color=Apparent]:data-[isactive=false]:dark:hover:text-white
              p-2 gap-1 items-center data-[state=expanded]:py-2.5 data-[state=expanded]:px-3 data-[state=expanded]:gap-3
              data-[state=collapsed]:flex-col data-[state=collapsed]:justify-center
            "
          >
            <div className="group-data-[state=expanded]:text-icon-size group-data-[state=collapsed]:text-xl group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-light dark:group-data-[isactive=false]:group-data-[nav-color=Integrate]:text-icon-dark">
              {image}
            </div>
            <span className="whitespace-nowrap group-data-[state=expanded]:text-small group-data-[state=collapsed]:text-x-small">
              {title}
            </span>
          </div>
          <SolarAltArrowRightLineDuotone className="absolute top-3 right-2" />
        </li>
      </PopoverTrigger>
      <PopoverContent side="right" className="min-w-[100px] w-[200px] text-sm">
        <ul className="space-y-1">
          {innerLinks?.map((inner) => (
            <InnerLink
              key={inner.href}
              href={inner.href}
              title={inner.title}
              pathname={pathname}
              navColor={navColor}
            />
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

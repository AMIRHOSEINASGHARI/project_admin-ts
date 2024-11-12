// next
import Link from "next/link";
// constants
import { menuLinks } from "@/constants";
// icons
import { LogoRegular, SolarAltArrowRightLineDuotone } from "@/components/svg";
// cmp
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SidebarMenuLink from "./SidebarMenuLink";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger />
      <SidebarHeader>
        <Link href="/dashboard" className="text-primary-1">
          <LogoRegular className="text-[40px]" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="w-fit group/collapsible relative justify-start p-[8px] pt-[16px]">
                <span className="text-[11px] transform group-hover/collapsible:translate-x-[5px] group-hover/collapsible:text-black dark:group-hover/collapsible:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500">
                  OVEWRVIEW
                </span>
                <SolarAltArrowRightLineDuotone className="text-black ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 absolute -left-1 hidden group-hover/collapsible:flex group-hover/collapsible:animate-fade group-hover/collapsible:animate-duration-500 dark:text-white" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuLinks.slice(0, 7).map((item) => (
                    <SidebarMenuLink
                      image={item.image}
                      link={item.link}
                      title={item.title}
                      key={item.link}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="w-fit group/collapsible-main relative justify-start p-[8px] pt-[16px]">
                <span className="text-[11px] transform group-hover/collapsible-main:translate-x-[5px] group-hover/collapsible-main:text-black dark:group-hover/collapsible-main:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500">
                  MANAGEMENT
                </span>
                <SolarAltArrowRightLineDuotone className="text-black ml-auto transition-transform group-data-[state=open]/collapsible-main:rotate-90 absolute -left-1 hidden group-hover/collapsible-main:flex group-hover/collapsible-main:animate-fade group-hover/collapsible-main:animate-duration-500 dark:text-white" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuLinks.slice(7).map((item) => (
                    <SidebarMenuLink
                      key={item.value}
                      image={item.image}
                      link={item.value}
                      title={item.title}
                      isCollapsible={item.isCollapsible}
                      innerLinks={item.innerLinks ? item.innerLinks : null}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;

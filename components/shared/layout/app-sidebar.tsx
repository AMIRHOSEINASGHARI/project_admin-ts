// next
import Link from "next/link";
// constants
import { menuLinks, sidebar_accordionList } from "@/constants";
// icons
import {
  LogoRegular,
  SolarAltArrowDownLineDuotone,
  SolarAltArrowRightLineDuotone,
} from "@/components/svg";
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="w-full h-full">
                        <Link href={item.link}>
                          <div className="icon">{item.image}</div>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="w-fit group/collapsible relative justify-start p-[8px] pt-[16px]">
                <span className="text-[11px] transform group-hover/collapsible:translate-x-[5px] group-hover/collapsible:text-black dark:group-hover/collapsible:text-white Transition font-medium uppercase tracking-tight text-gray-400 dark:text-slate-500">
                  MANAGEMENT
                </span>
                <SolarAltArrowRightLineDuotone className="text-black ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 absolute -left-1 hidden group-hover/collapsible:flex group-hover/collapsible:animate-fade group-hover/collapsible:animate-duration-500 dark:text-white" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebar_accordionList.map((item) => (
                    <Collapsible key={item.value} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="flex justify-between w-full group/collapsible">
                            <div className="flex items-center gap-3">
                              <div className="icon">{item.trigger.image}</div>
                              <span>{item.trigger.title}</span>
                            </div>
                            <SolarAltArrowRightLineDuotone className="group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.innerLinks.map((inner) => (
                              <SidebarMenuSubItem key={inner.href}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={inner.href}>{inner.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                  {menuLinks.slice(13).map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="w-full h-full">
                        <Link href={item.link}>
                          <div className="icon">{item.image}</div>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
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

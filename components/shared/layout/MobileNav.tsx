"use client";

// icons
import { SolarHamburgerMenuLineDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const MobileNav = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <Button variant="icon" onClick={() => setOpenMobile(true)}>
      <SolarHamburgerMenuLineDuotone />
    </Button>
  );
};

export default MobileNav;

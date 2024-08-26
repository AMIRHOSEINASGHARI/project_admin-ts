// cmp
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import ShowProfile from "./ShowProfile";
import AppearanceSettings from "./AppearanceSettings";
import FullscreenToggle from "../FullscreenToggle";
// icons
import {
  SolarBellBingBoldDuotone,
  SolarMinimalisticMagniferBoldDuotone,
} from "@/components/svg";

const Navbar = () => {
  return (
    <header className="backdrop-blur-[5px] bg-white/70 dark:bg-dark1/70 max-md:border-b border-b dark:border-b-dark2 fixed z-30 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden flex items-center justify-center">
            <MobileNav />
          </div>
          <div className="md:pl-[40px] lg:pl-[50px]">
            <Button variant="icon" className="gap-3">
              <SolarMinimalisticMagniferBoldDuotone />
              <span className="text-small text-slate-500 max-md:hidden">
                Search...
              </span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="icon">
            <SolarBellBingBoldDuotone />
          </Button>
          <FullscreenToggle />
          <AppearanceSettings />
          <ShowProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// cmp
import { Button } from "@/components/ui/button";
import DarkModeToggle from "../DarkModeToggle";
import SignoutButton from "../SignoutButton";
import MobileNav from "./MobileNav";
import ShowProfile from "./ShowProfile";
// icons
import { BellRegular, PowerRegular, SearchRegular } from "@/components/svg";
import AppearanceSettings from "./AppearanceSettings";

const Navbar = () => {
  return (
    <header className="backdrop-blur-[5px] bg-white/70 dark:bg-dark1/70 max-md:border-b border-b dark:border-b-dark2 fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden flex items-center justify-center">
            <MobileNav />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <SignoutButton title={<PowerRegular />} variant="icon" />
          <Button variant="icon">
            <SearchRegular />
          </Button>
          <Button variant="icon">
            <BellRegular />
          </Button>
          {/* <DarkModeToggle /> */}
          <AppearanceSettings />
          <ShowProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

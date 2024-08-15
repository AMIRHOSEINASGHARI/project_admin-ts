import {
  BellRegular,
  MenuBarsRegular,
  PowerRegular,
  SearchRegular,
} from "@/components/svg";
import DarkModeToggle from "../DarkModeToggle";
import SignoutButton from "../SignoutButton";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="backdrop-blur-xl bg-white/70 dark:bg-dark1 max-md:border-b border-b dark:border-b-dark2 fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="md:hidden">
            {/* <MobileNav /> */}
            <Button variant="icon">
              <MenuBarsRegular />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {/* <SignoutButton style="p-2 hover:bg-gray-100 rounded-full Transition text-darkGray text-[22px] flex items-center gap-btn" />
          <NavbarSearchBox />
          <ShowProfile /> */}
          <SignoutButton title={<PowerRegular />} variant="icon" />
          <Button variant="icon">
            <SearchRegular />
          </Button>
          <Button variant="icon">
            <BellRegular />
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

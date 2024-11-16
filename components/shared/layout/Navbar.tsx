// cmp
import MobileNav from "./MobileNav";
import ShowProfile from "./ShowProfile";
import AppearanceSettings from "./AppearanceSettings";
import FullscreenToggle from "../FullscreenToggle";
import NavbarSearch from "./NavbarSearch";
import Contacts from "./Contacts";
import Notifications from "./Notifications";

const Navbar = () => {
  return (
    <header className="backdrop-blur-[5px] bg-white/70 dark:bg-dark1/70 border-b border-border-light dark:border-border-dark fixed z-30 left-0 top-0 right-0 py-4 max-xl:px-4 xl:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="xl:hidden flex items-center justify-center">
            <MobileNav />
          </div>
          <NavbarSearch />
        </div>
        <div className="flex items-center gap-1">
          <Notifications />
          <Contacts />
          <FullscreenToggle />
          <AppearanceSettings />
          <ShowProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

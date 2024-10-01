// cmp
import AppearanceSettings from "@/components/shared/layout/AppearanceSettings";
// icons
import { LogoRegular } from "@/components/svg";

const AuthPageHeader = () => {
  return (
    <header className="fixed w-full bg-transparent py-4 px-6 flex items-center justify-between z-50">
      <LogoRegular className="text-primary-1 text-[40px]" />
      <AppearanceSettings />
    </header>
  );
};

export default AuthPageHeader;

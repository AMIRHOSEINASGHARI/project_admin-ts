"use client";

// cmp
import { Input } from "@/components/ui/input";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";

const MailSearch = () => {
  return (
    <div className="relative flex w-full max-xl:h-[30px]">
      <Input
        placeholder="Search..."
        className="w-full h-full pl-[45px] bg-transparent"
      />
      <div className="absolute max-xl:top-[7px] xl:top-[13px] left-[15px] xl:left-[10px] text-icon-light dark:text-icon-dark max-xl:text-xl xl:text-icon-size">
        <SolarMinimalisticMagniferBoldDuotone />
      </div>
    </div>
  );
};

export default MailSearch;

// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";
// cmp
import { Input } from "@/components/ui/input";

const SearchFiles = () => {
  return (
    <div className="relative w-full xl:w-[300px]">
      <Input placeholder="Search..." className="w-full pl-[40px]" />
      <SolarMinimalisticMagniferBoldDuotone className="icon absolute top-[14px] left-3" />
    </div>
  );
};

export default SearchFiles;

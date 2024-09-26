"use client";

// cmp
import { Input } from "@/components/ui/input";
// icons
import { SolarMinimalisticMagniferBoldDuotone } from "@/components/svg";

const ProductsSearchTextFilter = () => {
  return (
    <div className="relative flex flex-1">
      <Input placeholder="Search..." className="w-full h-full pl-[45px]" />
      <div className="absolute top-[13px] left-[15px] icon">
        <SolarMinimalisticMagniferBoldDuotone />
      </div>
    </div>
  );
};

export default ProductsSearchTextFilter;

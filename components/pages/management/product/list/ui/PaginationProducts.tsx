"use client";

// cmp
import { Button } from "@/components/ui/button";
// icons
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
} from "@/components/svg";

const PaginationProducts = () => {
  return (
    <div className="p-4 flex justify-end flex-wrap">
      <div className="flex items-center gap-2">
        <span className="text-small">1&#8209;5 of 20</span>
        <div>
          <Button variant="icon" className="text-lg">
            <SolarAltArrowLeftLineDuotone />
          </Button>
          <Button variant="icon" className="text-lg">
            <SolarAltArrowRightLineDuotone />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationProducts;

// icons
import { SolarFilterBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";

const FilterJobs = () => {
  return (
    <div className="flex max-xl:justify-end max-xl:w-full">
      <Button type="button" variant="action">
        <span>Filters</span>
        <SolarFilterBoldDuotone className="text-icon-light dark:text-icon-dark text-lg" />
      </Button>
    </div>
  );
};

export default FilterJobs;

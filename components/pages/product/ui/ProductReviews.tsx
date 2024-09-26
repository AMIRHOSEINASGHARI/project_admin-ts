// icons
import { SolarPenBoldDuotone } from "@/components/svg";
import { StarIcon } from "lucide-react";
// cmp
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const rating = [
  {
    starts: "5",
    progressValue: 20,
    value: "2.03k",
  },
  {
    starts: "4",
    progressValue: 18,
    value: "8.49k",
  },
  {
    starts: "3",
    progressValue: 25,
    value: "6.98k",
  },
  {
    starts: "2",
    progressValue: 5,
    value: "9.12k",
  },
  {
    starts: "1",
    progressValue: 30,
    value: "1.95k",
  },
];

const ProductReviews = () => {
  return (
    <div>
      <div className="flex lg:h-[238px] flex-col lg:flex-row lg:items-center border-b border-dashed border-border-light dark:border-border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-card">
          <span className="font-medium text-small">Average rating</span>
          <span className="text-[48px] font-extrabold">4.2/5</span>
          <div className="flex items-center gap-1">
            <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
            <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
            <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
            <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
            <StarIcon className="fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600 w-5" />
          </div>
          <span className="text-[var(--text-disabled)] text-sm">
            (1.95k reviews)
          </span>
        </div>
        <div className="p-card w-full h-full flex flex-col items-center justify-center gap-2 max-lg:border-y lg:border-x border-dashed border-border-light dark:border-border-dark">
          {rating.map(({ starts, progressValue, value }) => (
            <div key={starts} className="flex items-center gap-5 w-full">
              <span className="text-right w-[30px] whitespace-nowrap font-medium text-small">
                {starts} Star
              </span>
              <div className="w-full">
                <Progress
                  className="h-[4px] bg-black dark:bg-white"
                  rootClassName="h-[4px] w-full bg-gray-300 dark:bg-gray-700"
                  value={progressValue}
                  max={100}
                />
              </div>
              <span className="w-[30px] whitespace-nowrap font-medium text-small text-[var(--text-disabled)]">
                {value}
              </span>
            </div>
          ))}
        </div>
        <div className="p-card w-full h-full flex items-center justify-center">
          <Button variant="ghost" className="gap-3">
            <SolarPenBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
            Write your review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;

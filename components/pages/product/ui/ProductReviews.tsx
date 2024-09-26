// next
import Image from "next/image";
// constants
import { productReviews_rating, productReviews_reviews } from "@/constants";
// icons
import {
  CheckFill,
  SolarDislikeBoldDuotone,
  SolarLikeBoldDuotone,
  SolarPenBoldDuotone,
} from "@/components/svg";
import { StarIcon } from "lucide-react";
// cmp
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
          {productReviews_rating.map(({ starts, progressValue, value }) => (
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
            <SolarPenBoldDuotone className="icon" />
            Write your review
          </Button>
        </div>
      </div>
      <div className="space-y-10 p-card">
        {productReviews_reviews.map(({ user, date, disLike, like, title }) => (
          <div
            key={user.id}
            className="flex flex-col lg:flex-row gap-5 lg:gap-10"
          >
            <div className="w-full lg:w-[216px] flex lg:flex-col gap-4 items-center">
              <Image
                src={user.image}
                width={100}
                height={100}
                alt="user"
                priority
                className="rounded-full w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]"
              />
              <div className="flex flex-col lg:items-center">
                <span className="text-sm font-medium line-clamp-1">
                  {user.name}
                </span>
                <span className="text_disabled">{date}</span>
              </div>
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-1">
                <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
                <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
                <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
                <StarIcon className="fill-yellow-500 text-yellow-500 w-5" />
                <StarIcon className="fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600 w-5" />
              </div>
              {user.isVerified && (
                <div className="text-green-500 flex items-center gap-1">
                  <CheckFill className="text-lg" />
                  <span className="text-small">Verified purchase</span>
                </div>
              )}
              <p className="card_description">{title}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <SolarLikeBoldDuotone className="text-icon-light dark:text-icon-dark" />
                  <span className="text-small">{like}</span>
                </div>
                <div className="flex items-center gap-1">
                  <SolarDislikeBoldDuotone className="text-icon-light dark:text-icon-dark" />
                  <span className="text-small">{disLike}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;

// types
import { AdminType } from "@/types/admin";
// utils
import { applyDiscount } from "@/utils/functions";
// constants
import { images } from "@/constants";
// icons
import { StarIcon } from "lucide-react";
import {
  PlusRegular,
  SolarCartLarge4BoldDuotone,
  SolarHeartPulse2BoldDuotone,
  SolarShareBoldDuotone,
} from "@/components/svg";
// cmp
import CustomTooltip from "@/components/shared/CustomTooltip";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type ProductSummaryInfoProps = {
  stock: number;
  title: string;
  price: number;
  discount: number;
  subDescription: string;
  createdBy: AdminType;
  brand: string;
  category: string;
};

const ProductSummaryInfo = ({
  stock,
  title,
  price,
  discount,
  subDescription,
  createdBy,
  brand,
  category,
}: ProductSummaryInfoProps) => {
  const stockStatus =
    stock === 0
      ? "out of stock"
      : stock > 0 && stock <= 10
      ? "low stock"
      : "in stock";

  return (
    <div className="w-full xl:w-[40%]">
      <div className="space-y-4 py-8 border-b border-border-light dark:border-border-dark border-dashed">
        <span
          className={clsx("text-sm uppercase font-[500]", {
            "text-red-500": stock === 0,
            "text-orange-500": stock > 0 && stock <= 10,
            "text-green-500": stock > 10,
          })}
        >
          {stockStatus}
        </span>
        <h5 className="h5">{title}</h5>
        <div className="flex items-center gap-3">
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
        <div className="flex items-center gap-1">
          {discount > 0 && (
            <span className="price_discount">${price.toFixed(2)}</span>
          )}
          <span className="price">${applyDiscount(price, discount)}</span>
        </div>
        <p className="card_description">{subDescription}</p>
      </div>
      <div className="space-y-5 py-8 border-b border-border-light dark:border-border-dark border-dashed">
        <div className="flex items-center justify-between">
          <span className="bold-value-3">Created by</span>
          <CustomTooltip
            trigger={
              <Avatar>
                <AvatarImage src={createdBy?.avatar || images.admin} />
                <AvatarFallback>{createdBy?.username[0]}</AvatarFallback>
              </Avatar>
            }
            content={
              <div className="flex flex-col">
                <span className="font-bold text-md">{createdBy?.name}</span>
                <span>{createdBy?.username}</span>
              </div>
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="bold-value-3">Brand</span>
          <span className="capitalize text-right text-small">{brand}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="bold-value-3">Category</span>
          <span className="capitalize text-right text-small">{category}</span>
        </div>
      </div>
      <div className="space-y-5 py-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button disabled className="w-full h-[48px] text-md gap-4">
            <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to
            cart
          </Button>
          <Button disabled className="w-full h-[48px] text-md gap-4">
            Buy now
          </Button>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <Button variant="action">
            <PlusRegular />
            Compare
          </Button>
          <Button variant="action">
            <SolarHeartPulse2BoldDuotone />
            Favorite
          </Button>
          <Button variant="action">
            <SolarShareBoldDuotone />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryInfo;

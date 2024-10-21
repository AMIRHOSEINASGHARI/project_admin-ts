// next
import Image from "next/image";
import Link from "next/link";
// types
import { TourType } from "@/types/tour";
// constants
import { images as constantsImages } from "@/constants";
// icons
import {
  SolarClockCircleBoldDuotone,
  SolarMapPointWaveBoldDuotone,
  SolarOverflowMenuVertical,
  SolarUsersGroupRoundedBoldDuotone,
  StarFill,
} from "@/components/svg";
// cmp
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { applyDiscount } from "@/utils/functions";
import { Button } from "@/components/ui/button";
import moment from "moment";

const TourCard = ({ tour }: { tour: TourType }) => {
  const {
    _id,
    images,
    name,
    price,
    discount,
    createdAt,
    destination,
    startDate,
    endDate,
  } = tour;

  const list = [
    {
      id: "1",
      icon: <SolarMapPointWaveBoldDuotone />,
      iconClassName: "text-rose-500 dark:text-rose-500 text-xl",
      value: destination,
    },
    {
      id: "2",
      icon: <SolarClockCircleBoldDuotone />,
      iconClassName: "text-sky-500 dark:text-sky-500 text-xl",
      value: `${moment(startDate).format("ll")}-${moment(endDate).format(
        "ll"
      )}`,
    },
    {
      id: "3",
      icon: <SolarUsersGroupRoundedBoldDuotone />,
      iconClassName: "text-green-500 dark:text-green-500 text-xl",
      value: "12 Booked",
    },
  ];

  return (
    <Card
      style={{
        padding: 0,
        position: "relative",
      }}
    >
      <div className="p-1.5 flex h-[180px] gap-1">
        <div className="w-full h-full relative">
          <div className="absolute top-2 px-2 w-full flex flex-wrap gap-1 items-center justify-between">
            <Badge className="bg-slate-950 dark:bg-slate-950 text-slate-50 dark:text-slate-50 flex gap-1 items-center text-sm">
              {discount > 0 && (
                <span className="text-[var(--text-disabled)] line-through">
                  ${price}
                </span>
              )}
              <span>${applyDiscount(price, discount)}</span>
            </Badge>
            <Badge
              variant="orange"
              className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-100"
            >
              <StarFill className="text-xl text-yellow-500 dark:text-yellow-500" />
              <span className="text-black dark:text-black font-normal text-sm">
                4.2
              </span>
            </Badge>
          </div>
          <Image
            src={images[0] || constantsImages.noImage}
            width={500}
            height={500}
            alt="image"
            priority
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-[80px] h-[80px] flex flex-1">
            <Image
              src={images[1] || constantsImages.noImage}
              width={500}
              height={500}
              alt="image"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[80px] h-[80px] flex flex-1">
            <Image
              src={images[2] || constantsImages.noImage}
              width={500}
              height={500}
              alt="image"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="p-card pt-[15px] space-y-2">
        <span className="text_disabled">
          Posted date:{moment(createdAt).format("lll")}
        </span>
        <Button type="button" variant="linkSecondary" className="line-clamp-2">
          <Link href={`/tour/${_id}`}>{name}</Link>
        </Button>
        {list.map(({ id, icon, value, iconClassName }) => (
          <div key={id} className="flex items-center gap-3">
            <div className={iconClassName}>{icon}</div>
            <span className="text-small">{value}</span>
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="icon"
        className="absolute bottom-5 right-2"
      >
        <SolarOverflowMenuVertical />
      </Button>
    </Card>
  );
};

export default TourCard;

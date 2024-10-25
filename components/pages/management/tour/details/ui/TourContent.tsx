// next
import Image from "next/image";
// types
import { TourType } from "@/types/tour";
// constants
import { tourServices } from "@/constants";
// cmp
import {
  SolarCalendar2,
  SolarCheckCircleBoldDuotone,
  SolarClockCircleBoldDuotone,
  SolarGolfBoldDuotone,
  SolarHeartBold,
  SolarMapPointWaveBoldDuotone,
  SolarPhoneBold,
  SolarShareBoldDuotone,
  SolarUserCdBoldDuotone,
  StarFill,
} from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import View from "@/components/shared/layout/View";
import moment from "moment";
import clsx from "clsx";

const TourContent = ({ tour }: { tour: TourType }) => {
  const {
    images,
    name,
    content,
    tourGuide,
    destination,
    endDate,
    startDate,
    duration,
    services,
  } = tour;

  const list = [
    {
      icon: <SolarCalendar2 />,
      title: "Available",
      value: `${moment(startDate).format("ll")}-${moment(endDate).format(
        "ll"
      )}`,
    },
    {
      icon: <SolarUserCdBoldDuotone />,
      title: "Contact phone",
      value: tourGuide?.phoneNumber,
    },
    {
      icon: <SolarClockCircleBoldDuotone />,
      title: "Durations",
      value: duration,
    },
    {
      icon: <SolarPhoneBold />,
      title: "Contact name",
      value: tourGuide?.name,
    },
  ];

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
        <Image
          src={images[0]}
          width={1000}
          height={1000}
          alt="image"
          priority
          className="rounded-card"
        />
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1).map((image) => (
            <Image
              key={image}
              src={image}
              width={1000}
              height={1000}
              alt="image"
              priority
              className="rounded-card"
            />
          ))}
        </div>
      </div>
      <View
        className="max-w-[670px] mx-auto space-y-[35px]"
        orientation="vertical"
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="h4">{name}</h4>
          <div className="flex items-center gap-1">
            <Button type="button" variant="icon">
              <SolarShareBoldDuotone />
            </Button>
            <Button
              type="button"
              variant="icon"
              className="text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-700/20"
            >
              <SolarHeartBold />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1">
            <StarFill className="text-xl text-yellow-500 dark:text-yellow-500" />
            <span className="text-small">4.2</span>
            <span className="text_disabled">(234 reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <SolarMapPointWaveBoldDuotone className="text-rose-500 dark:text-rose-500 text-xl" />
            <span className="text-small">{destination}</span>
          </div>
          <div className="flex items-center gap-1">
            <SolarGolfBoldDuotone className="text-sky-500 dark:text-sky-500 text-xl" />
            <span className="text-small gap-1 flex">
              <span className="text-[var(--text-disabled)]">Guide by</span>
              {tourGuide?.name}
            </span>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-7">
          {list.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <div className="text-icon-size">{item.icon}</div>
              <div className="flex flex-col gap-1">
                <span className="text_disabled">{item.title}</span>
                <span className="text-small font-semibold">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div
          className="tiptap"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <div className="space-y-5">
          <h5 className="h5">Services</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {tourServices.map((service) => (
              <div key={service} className="flex items-center gap-2">
                <SolarCheckCircleBoldDuotone
                  className={clsx("text-icon-size", {
                    "text-green-500": services.includes(service),
                    "text-gray-400": !services.includes(service),
                  })}
                />
                <span
                  className={clsx("text-sm", {
                    "text-black dark:text-white": services.includes(service),
                    "text-gray-400": !services.includes(service),
                  })}
                >
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </View>
    </div>
  );
};

export default TourContent;

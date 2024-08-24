// next
import Image from "next/image";
// constants
import { fakeNames } from "@/constants";
// cmp
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
  SolarCalendarBoldDuotone,
  SolarUsersGroupRoundedBoldDuotone,
} from "@/components/svg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewestBooking = () => {
  return (
    <Card>
      <CardHeader className="absolute">
        <CardTitle>Newest booking</CardTitle>
        <CardDescription>8 bookings</CardDescription>
      </CardHeader>
      <Carousel className="pt-[60px]">
        <div className="absolute top-0 right-0">
          <CarouselPrevious variant="icon" className="text-lg">
            <SolarAltArrowLeftLineDuotone />
          </CarouselPrevious>
          <CarouselNext variant="icon" className="text-lg">
            <SolarAltArrowRightLineDuotone />
          </CarouselNext>
        </div>
        <CarouselContent>
          {fakeNames.map((item, index) => (
            <CarouselItem key={item.name} className="md:basis-1/2 xl:basis-1/4">
              <div className="space-y-4 bg-light2 dark:bg-dark3 rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="user"
                    priority
                    className="rounded-full w-[45px] h-[45px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-small font-medium">{item.name}</span>
                    <span className="text-xs text-slate-400">
                      Postet 24 Aug 2024 3:35 pm
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <SolarCalendarBoldDuotone className="text-icon-light dark:text-icon-dark" />
                    <span className="text-xs font-light">3 Days 2 nights</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SolarUsersGroupRoundedBoldDuotone className="text-icon-light dark:text-icon-dark" />
                    <span className="text-xs font-light">3-5 guests</span>
                  </div>
                </div>
                <Image
                  src={`/images/pic/travel-${index + 1}.png`}
                  width={300}
                  height={300}
                  alt="pic"
                  priority
                  className="rounded-xl w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};

export default NewestBooking;

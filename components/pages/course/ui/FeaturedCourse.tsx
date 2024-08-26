// next
import Image from "next/image";
// constants
import { coursePage_featuredCourse_data } from "@/constants";
// icons
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
  SolarClockCircleBoldDuotone,
  SolarUsersGroupRoundedBoldDuotone,
} from "@/components/svg";
// cmp
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const FeaturedCourse = () => {
  return (
    <Card>
      <CardHeader className="absolute">
        <CardTitle>Featured course</CardTitle>
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
          {coursePage_featuredCourse_data.map((item, index) => (
            <CarouselItem
              key={item.title}
              className="sm:basis-1/2 xl:basis-1/4"
            >
              <div className="flex flex-col justify-between gap-4 h-full">
                <div className="space-y-4">
                  <Image
                    src={`/images/courses/course-${index + 1}.png`}
                    width={200}
                    height={200}
                    alt="pic"
                    priority
                    className="rounded-xl w-full"
                  />
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 bg-[var(--ghost)] rounded-md p-1">
                      <SolarClockCircleBoldDuotone className="text-icon-light dark:text-icon-dark" />
                      <span className="text-xs font-light">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[var(--ghost)] rounded-md p-1">
                      <SolarUsersGroupRoundedBoldDuotone className="text-icon-light dark:text-icon-dark" />
                      <span className="text-xs font-light">{item.users}</span>
                    </div>
                  </div>
                  <p className="line-clamp-2 text-small">{item.title}</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">${item.price}</span>
                    <span className="text-small text-slate-400"> / year</span>
                  </div>
                  <Button className="py-1 text-sm font-bold">Join</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};

export default FeaturedCourse;

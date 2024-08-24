// next
import Image from "next/image";
// constants
import { fakeNames } from "@/constants";
// cmp
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
} from "@/components/svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";

const CustomerReviews = () => {
  return (
    <Card>
      <CardHeader className="absolute">
        <CardTitle>Customer reviews</CardTitle>
        <CardDescription>11 Reviews</CardDescription>
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
          {fakeNames.map((item) => (
            <CarouselItem key={item.name} className="space-y-3">
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
              <p className="text-small leading-6 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                consequuntur quia saepe assumenda sint dolor porro rem ratione
                nam, officia voluptate fugit architecto facere a, laborum
                nostrum, explicabo similique voluptatum aliquid sed vitae
                incidunt? Laudantium, expedita! Similique animi saepe nam ipsa,
                quae fuga praesentium voluptates optio magni perferendis quas
                non quos impedit aspernatur sed recusandae fugiat eius quaerat
                quam accusamus ullam a iusto vero. Ullam!
              </p>
              <div className="flex items-center flex-wrap gap-3">
                <Badge
                  variant="favorite"
                  className="bg-slate-200 dark:bg-slate-700 dark:text-slate-100"
                >
                  Great service
                </Badge>
                <Badge
                  variant="favorite"
                  className="bg-slate-200 dark:bg-slate-700 dark:text-slate-100"
                >
                  Recommended
                </Badge>
                <Badge
                  variant="favorite"
                  className="bg-slate-200 dark:bg-slate-700 dark:text-slate-100"
                >
                  Best price
                </Badge>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Separator className="my-5" />
      <div className="flex items-center gap-3 w-full">
        <Button
          variant="ghost"
          className="w-full font-semibold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200"
        >
          Reject
        </Button>
        <Button variant="default" className="w-full font-semibold">
          Accept
        </Button>
      </div>
    </Card>
  );
};

export default CustomerReviews;

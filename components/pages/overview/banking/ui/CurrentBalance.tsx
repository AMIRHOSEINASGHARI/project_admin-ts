// icons
import {
  AngleLeftRegular,
  AngleRightRegular,
  MenuDotsVerticalRegular,
} from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// constants
import { currentBalance_carouselData } from "@/constants";

const CurrentBalance = () => {
  return (
    <Carousel>
      <CarouselContent>
        {currentBalance_carouselData.map((item) => (
          <CarouselItem key={item.cardNumber}>
            <Card className="bg-gradient-to-r to-[#323f3d] from-[#1a1d30] text-white space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-small">
                  Current balance
                </span>
                <Button variant="icon">
                  <MenuDotsVerticalRegular className="text-small" />
                </Button>
              </div>
              <span className="font-extrabold text-large">
                ${item.total.toLocaleString()}
              </span>
              <div className="w-full justify-end flex">
                <span>{item.cardNumber}</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-small">Card holder</span>
                  <span>{item.cardHolder}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-small">
                    Expiration date
                  </span>
                  <span>{item.expirationDate}</span>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-2 w-fit absolute bottom-5 right-5">
        <CarouselPrevious
          variant="icon"
          className="p-0.5 w-fit h-fit text-white bg-primary-1 text-small"
        >
          <AngleLeftRegular />
        </CarouselPrevious>
        <CarouselNext
          variant="icon"
          className="p-0.5 w-fit h-fit text-white bg-primary-1 text-small"
        >
          <AngleRightRegular />
        </CarouselNext>
      </div>
    </Carousel>
  );
};

export default CurrentBalance;

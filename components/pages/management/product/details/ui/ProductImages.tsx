"use client";

// react
import { useEffect, useState } from "react";
// next
import Image from "next/image";
// icons
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
} from "@/components/svg";
// cmp
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProductImages = ({ images }: { images: string[] }) => {
  const [api, setapi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full xl:w-[60%] flex flex-col items-center gap-5">
      <Carousel
        className="rounded-card overflow-hidden relative max-w-[630px] max-h-[630px]"
        setApi={setapi}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image} className="pl-0">
              <Image
                src={image}
                width={600}
                height={600}
                alt="product"
                priority
                className="w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-3 right-3 bg-black/50 flex items-center gap-3 p-[4px] rounded-lg">
          <CarouselPrevious className="bg-transparent w-fit h-fit rounded-none p-1 text-lg hover:bg-transparent dark:hover:bg-transparent hover:text-white text-white dark:text-white border-none">
            <SolarAltArrowLeftLineDuotone />
          </CarouselPrevious>
          <span className="text-white dark:text-white text-small font-bold">
            {current}/{count}
          </span>
          <CarouselNext className="bg-transparent w-fit h-fit rounded-none p-1 text-lg hover:bg-transparent dark:hover:bg-transparent hover:text-white text-white dark:text-white border-none">
            <SolarAltArrowRightLineDuotone />
          </CarouselNext>
        </div>
      </Carousel>
      {/* // TODO: add another images carousel below the first one */}
    </div>
  );
};

export default ProductImages;

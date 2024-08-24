"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// constants
import { fakeNames } from "@/constants";
// icons
import { AngleLeftRegular, AngleRightRegular } from "@/components/svg";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Textarea } from "@/components/ui/textarea";

type SelectedUserType = {
  name: string;
  image: string;
  email: string;
};

const QuickTransfer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [transferValue, setTransferValue] = useState<number[]>([0]);
  const [selectedUser, setSelectedUser] = useState<SelectedUserType>(
    fakeNames[5]
  );

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  const HiddenTags = () => (
    <VisuallyHidden.Root>
      <DialogDescription></DialogDescription>
    </VisuallyHidden.Root>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick transfer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-small text-slate-500">Recent</span>
          <CardAttatchmentButton />
        </div>
        <Carousel className="w-full py-[50px]">
          <CarouselContent>
            {fakeNames.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-[30%] sm:basis-[15%] md:basis-[20%] lg:basis-[15%] xl:basis-1/5"
              >
                <CustomTooltip
                  side="top"
                  trigger={
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="user"
                      priority
                      className="rounded-full w-[45px] h-[45px] cursor-pointer"
                      onClick={() => setSelectedUser(item)}
                    />
                  }
                  content={item.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="icon"
            className="absolute top-[65px] left-0 dark:bg-dark3 bg-slate-300 p-1 w-fit h-fit text-small"
          >
            <AngleLeftRegular />
          </CarouselPrevious>
          <CarouselNext
            variant="icon"
            className="absolute top-[65px] right-0 dark:bg-dark3 bg-slate-300 p-1 w-fit h-fit text-small"
          >
            <AngleRightRegular />
          </CarouselNext>
        </Carousel>
        <div className="space-y-[40px]">
          <span className="text-small text-slate-500">Insert amount</span>
          <div className="flex items-center justify-center gap-2 font-black text-large">
            <span className="mb-3">$</span>
            <span>{transferValue[0]}</span>
          </div>
          <Slider
            max={1000}
            step={1}
            value={transferValue}
            onValueChange={(val) => setTransferValue(val)}
          />
          <div className="flex items-center justify-between">
            <span className="font-medium">Your balance</span>
            <span className="font-medium">$34,212</span>
          </div>
          <Dialog open={open} onOpenChange={onOpenChange}>
            <Button
              className="w-full font-extrabold"
              variant="secondary"
              disabled={transferValue[0] === 0 || selectedUser === null}
              onClick={onOpen}
            >
              Transfer now
            </Button>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Transfer to</DialogTitle>
                <HiddenTags />
              </DialogHeader>
              <div className="flex items-center gap-2 flex-wrap">
                <Image
                  src={selectedUser?.image}
                  width={100}
                  height={100}
                  alt={selectedUser?.name}
                  priority
                  className="rounded-full w-[45px] h-[45px]"
                />
                <div className="flex flex-col">
                  <span className="text-small font-medium">
                    {selectedUser?.name}
                  </span>
                  <span className="text-small text-slate-500">
                    {selectedUser?.email}
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="font-extrabold text-x-large">
                  $ {transferValue[0]}
                </span>
              </div>
              <Textarea placeholder="Write a message..." rows={5} />
              <div className="flex items-center gap-3 justify-end">
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={onClose}>Transfer</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickTransfer;

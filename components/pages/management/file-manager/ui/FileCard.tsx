// react
import { ReactNode } from "react";
// next
import Image from "next/image";
// types
import { File } from "@/types/shared";
// icons
import {
  SolarOverflowMenuVertical,
  StarFill,
  StarRegular,
} from "@/components/svg";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import moment from "moment";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const FileCard = ({
  file: { icon, important, size, name, modified, tags, image, type },
}: {
  file: File;
}) => {
  const Trigger = () => (
    <div className="flex flex-col gap-2 min-w-[250px] border border-border-light dark:border-border-dark p-[20px] rounded-card hover:shadow-2xl Transition hover:shadow-gray-200 dark:hover:bg-dark3 dark:hover:shadow-black/30 cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="text-[36px]">{icon}</div>
        <div className="flex items-center gap-1">
          <Button variant="icon" className="text-xl">
            {important ? (
              <StarFill className="text-yellow-500" />
            ) : (
              <StarRegular />
            )}
          </Button>
          <Button variant="icon" className="text-xl">
            <SolarOverflowMenuVertical />
          </Button>
        </div>
      </div>
      <span className="bold-value-3">{name}</span>
      <span className="text_disabled">
        {size} / {moment(modified).format("lll")}
      </span>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Trigger />
      </SheetTrigger>
      <SheetContent className="lg:max-w-[300px] p-0">
        <HiddenTags />
        <div className="space-y-5">
          <div className="flex items-center justify-between bg-white dark:bg-dark1 p-sheet-content">
            <h5 className="h5 dark:text-white">Info</h5>
            <Button variant="icon" className="text-xl">
              {important ? (
                <StarFill className="text-yellow-500" />
              ) : (
                <StarRegular />
              )}
            </Button>
          </div>
          <Box>
            {typeof image === "string" ? (
              <Image
                src={image}
                width={500}
                height={500}
                alt="image"
                priority
                className="rounded-card"
              />
            ) : (
              <div className="text-[60px]">{icon}</div>
            )}

            <span className="bold-value-3">{name}</span>
          </Box>
          <Separator />
          <Box>
            <span className="text-small font-semibold">Tags</span>
            <div className="flex flex-wrap items-center gap-2 border border-border-light dark:border-border-dark p-3 rounded-card">
              {tags.map((tag) => (
                <Badge key={tag} variant="gray">
                  {tag}
                </Badge>
              ))}
            </div>
          </Box>
          <Box>
            <span className="text-small font-semibold">Properties</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <span className="text_disabled w-1/3">Size</span>
                <span className="text-small w-2/3">{size}</span>
              </div>
              <div className="flex items-center">
                <span className="text_disabled w-1/3">Modified</span>
                <span className="text-small w-2/3">
                  {moment(modified).format("lll")}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text_disabled w-1/3">Type</span>
                <span className="text-small w-2/3 capitalize">{type}</span>
              </div>
            </div>
          </Box>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FileCard;

const Box = ({ children }: { children: ReactNode }) => {
  return <div className="px-sheet-content flex flex-col gap-3">{children}</div>;
};

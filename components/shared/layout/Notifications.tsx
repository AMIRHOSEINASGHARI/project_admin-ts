// next
import Image from "next/image";
// constants
import { navbar_notifications } from "@/constants";
// icons
import {
  SolarBellBingBoldDuotone,
  SolarSettingsBoldDuotone,
} from "@/components/svg";
import { CheckCheck } from "lucide-react";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetDescription></SheetDescription>
  </VisuallyHidden.Root>
);

const Notifications = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <Button variant="icon">
            <SolarBellBingBoldDuotone />
          </Button>
          <span className="rounded-full w-[20px] h-[20px] bg-orange-500 text-white font-medium text-small absolute -top-1 -right-1 flex items-center justify-center">
            4
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="xl:w-[420px] lg:max-w-none p-0">
        <div className="relative w-full h-full">
          <SheetHeader className="p-4 absolute z-10 top-0 left-0 w-full bg-white dark:bg-dark2">
            <SheetTitle className="flex justify-between items-center">
              <span>Notifications</span>
              <div className="flex items-center gap-1">
                <Button
                  variant="icon"
                  className="text-primary-1 dark:text-primary-1"
                >
                  <CheckCheck />
                </Button>
                <Button variant="icon">
                  <SolarSettingsBoldDuotone />
                </Button>
              </div>
            </SheetTitle>
            <HiddenTags />
          </SheetHeader>
          <div className="w-full h-full flex flex-col overflow-auto hideScrollBar pt-[75px] pb-[70px]">
            {navbar_notifications.map((notif) => (
              <div
                key={notif.id}
                className="relative flex gap-4 items-start justify-start cursor-pointer hover:bg-light3 dark:hover:bg-dark3 bg-transparent dark:bg-transparent p-4 w-full rounded-none border-b border-dashed border-border-light dark:border-border-dark"
              >
                {!notif.isRead && (
                  <div className="bg-cyan-500 w-2 h-2 rounded-full absolute top-5 right-4" />
                )}
                {notif.imageType === "jpg" && notif.imageUrl ? (
                  <div className="w-[40px] h-[40px] flex shrink-0">
                    <Image
                      src={notif.imageUrl}
                      width={70}
                      height={70}
                      alt="image"
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-[40px] h-[40px] bg-light3 dark:bg-dark3 rounded-full flex items-center justify-center shrink-0 text-icon-size">
                    {notif.svg}
                  </div>
                )}
                <div className="flex flex-col items-start gap-2">
                  <p className="text-small pr-3 line-clamp-3">{notif.text}</p>
                  <span className="text-xs text-[var(--text-disabled)]">
                    {notif.date} &#8226; {notif.type}
                  </span>
                  {notif?.innerContent && (
                    <p className="bg-light3 dark:bg-dark3 p-3 rounded-xl w-full text-small">
                      {notif.innerContent}
                    </p>
                  )}
                  {notif?.actions && notif.actions}
                </div>
              </div>
            ))}
          </div>
          <SheetFooter className="absolute bottom-0 left-0 right-0 w-full bg-white dark:bg-dark2 p-2">
            <Button
              className="w-full bg-transparent dark:bg-transparent py-3"
              variant="ghost"
            >
              View all
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Notifications;

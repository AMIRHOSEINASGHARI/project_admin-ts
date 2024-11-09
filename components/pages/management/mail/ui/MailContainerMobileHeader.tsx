// types
import { MailContainerMobileHeaderProps } from "@/types/components";
// cmp
import { SolarChatRoundDotsBoldDuotone, SolarMailBold } from "@/components/svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import MailSidebar from "./MailSidebar";
import MailFolders from "./MailFolders";
import MailSearch from "./MailSearch";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const MailContainerMobileHeader = ({
  folderMails,
  activeLabel,
  activeConversation,
  setActiveConversation,
}: MailContainerMobileHeaderProps) => {
  return (
    <div className="xl:hidden flex items-center gap-1">
      <div className="flex items-center gap-1">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="icon" className="text-xl">
              <SolarMailBold />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[300px] p-3">
            <HiddenTags />
            <MailSidebar />
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="icon" className="text-xl">
              <SolarChatRoundDotsBoldDuotone />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-fit">
            <HiddenTags />
            <div className="capitalize font-bold text-md mx-3 mt-5 -mb-4">
              {activeLabel}
            </div>
            <MailFolders
              folderMails={folderMails}
              activeLabel={activeLabel}
              activeConversation={activeConversation}
              setActiveConversation={setActiveConversation}
            />
          </SheetContent>
        </Sheet>
      </div>
      <MailSearch />
    </div>
  );
};

export default MailContainerMobileHeader;

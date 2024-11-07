// types
import { Mail } from "@/types/shared";
// constants
import { images } from "@/constants";
// icons
import {
  SolarAddImageBold,
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
  SolarPin,
  SolarSendBold,
} from "@/components/svg";
// cmp
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MailConversationHeader from "./MailConversationHeader";
import Editor from "@/components/editor/Editor";

const MailConversation = ({
  activeConversation: { from, to, content, important, label, starred, subject },
}: {
  activeConversation: Mail;
}) => {
  return (
    <div className="w-full rounded-[16px] bg-white dark:bg-dark1">
      <MailConversationHeader
        important={important}
        starred={starred}
        label={label}
      />
      <Separator />
      <SubjectSection subject={subject} />
      <Separator />
      <div className="p-3 space-y-3">
        <div className="space-y-8 min-h-[300px]">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={from?.avatar || images.admin3} />
              <AvatarFallback>{from?.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start overflow-hidden">
              <p className="line-clamp-2">
                <span className="text-small">{from?.name}</span>
                <span className="text_disabled line-clamp-3">
                  {" "}
                  / {from?.email}
                </span>
              </p>
              <span className="text_disabled line-clamp-3">
                To: {to?.email}
              </span>
            </div>
          </div>
          <p className="text-small">{content}</p>
        </div>
        <Editor content="" onFieldChange={(value) => null} />
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <Button variant="icon" className="text-xl">
              <SolarAddImageBold />
            </Button>
            <Button variant="icon" className="text-xl">
              <SolarPin />
            </Button>
          </div>
          <Button className="bg-primary-1 dark:bg-primary-1 dark:text-white gap-1 font-medium">
            Send
            <SolarSendBold className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MailConversation;

const SubjectSection = ({ subject }: { subject: string }) => {
  return (
    <div className="p-3 flex justify-between">
      <span className="font-semibold text-sm line-clamp-3">Re: {subject}</span>
      <div className="w-[150px] flex flex-col items-end gap-1">
        <div>
          <Button variant="icon" className="text-sm">
            <SolarAltArrowLeftLineDuotone />
          </Button>
          <Button variant="icon" className="text-sm">
            <SolarAltArrowRightLineDuotone />
          </Button>
        </div>
        <span className="text_disabled whitespace-nowrap">
          30 Oct 2024 5:15 am
        </span>
      </div>
    </div>
  );
};

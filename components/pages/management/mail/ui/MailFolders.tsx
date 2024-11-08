// react
import { useEffect } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// constants
import { images } from "@/constants";
// utils
import { shorterText } from "@/utils/functions";
// types
import { MailFoldersProps } from "@/types/components";
// cmp
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MailSearch from "./MailSearch";
import MailEmptyBox from "./EmptyBox";
import clsx from "clsx";

const MailFolders = ({
  folderMails,
  activeLabel,
  activeConversation,
  setActiveConversation,
}: MailFoldersProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleMailID = (id: string) => {
    const params = new URLSearchParams(searchParams);

    if (id) {
      params.set("id", id);
    } else {
      params.delete("id");
    }

    replace(`${pathname}?${params?.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const activeID = params?.get("id");

    const activeMail = folderMails?.find((mail) => mail.id === activeID);

    setActiveConversation(activeMail);
  });

  return (
    <div className="w-full p-3 min-w-[300px] max-w-[320px] rounded-[16px] bg-white dark:bg-dark1 space-y-3">
      <div className="w-full max-xl:hidden">
        <MailSearch />
      </div>
      {folderMails?.length === 0 ? (
        <MailEmptyBox
          title={`Nothing in ${activeLabel}`}
          subText="This folder is empty"
          type="folder"
        />
      ) : (
        <div className="flex flex-col gap-1">
          {folderMails.map(({ id, date, from, subject }) => (
            <Button
              key={id}
              variant="ghost"
              className={clsx("justify-between items-start", {
                "bg-light3 dark:bg-dark3": activeConversation?.id === id,
                "bg-transparent dark:bg-transparent":
                  activeConversation?.id !== id,
              })}
              onClick={() => handleMailID(id)}
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={from?.avatar || images.admin3} />
                  <AvatarFallback>{from?.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-small">
                    {shorterText(from?.name, 20, true)}
                  </span>
                  <span className="text-small text-[var(--text-disabled)]">
                    {shorterText(subject, 20, true)}
                  </span>
                </div>
              </div>
              <span className="text_disabled">{date}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailFolders;

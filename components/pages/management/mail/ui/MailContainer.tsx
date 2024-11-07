"use client";

// react
import { useEffect, useState } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// types
import { Mail } from "@/types/shared";
// constants
import { mails } from "@/constants";
// cmp
import MailFolders from "./MailFolders";
import MailSidebar from "./MailSidebar";
import MailConversation from "./MailConversation";
import MailContainerMobileHeader from "./MailContainerMobileHeader";

const MailContainer = () => {
  const [folderMails, setFolderMails] = useState(mails);
  const [activeConversation, setActiveConversation] = useState<
    Mail | undefined | null
  >(folderMails[0]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (!params.get("label")) {
      params.set("label", "inbox");

      const newRoute = `${pathname}?${params?.toString()}`;
      replace(newRoute);
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const activeLabel = params?.get("label");

    let filteredMails;

    if (activeLabel === "all") {
      filteredMails = mails;
    } else {
      filteredMails = mails.filter((mail) => mail.label === activeLabel);
    }

    setFolderMails(filteredMails);
  }, [searchParams]);

  return (
    <div className="p-3 rounded-[16px] bg-light2 dark:bg-dark3 flex flex-col xl:flex-row gap-3">
      <MailContainerMobileHeader
        folderMails={folderMails}
        setFolderMails={setFolderMails}
        setActiveConversation={setActiveConversation}
        activeLabel={params?.get("label")}
      />
      <div className="max-xl:hidden flex gap-3">
        <div className="min-w-[230px]">
          <MailSidebar />
        </div>
        <MailFolders
          folderMails={folderMails}
          setFolderMails={setFolderMails}
          setActiveConversation={setActiveConversation}
          activeLabel={params?.get("label")}
        />
      </div>
      <MailConversation activeConversation={activeConversation} />
    </div>
  );
};

export default MailContainer;

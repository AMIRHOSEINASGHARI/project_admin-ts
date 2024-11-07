"use client";

// react
import { useState } from "react";
// constants
import { mails } from "@/constants";
// cmp
import MailFolders from "./MailFolders";
import MailSidebar from "./MailSidebar";
import MailConversation from "./MailConversation";
import MailContainerMobileHeader from "./MailContainerMobileHeader";

const MailContainer = () => {
  const [folderMails, setFolderMails] = useState(mails);
  const [activeConversation, setActiveConversation] = useState(folderMails[0]);

  return (
    <div className="p-3 rounded-[16px] bg-light2 dark:bg-dark3 flex flex-col xl:flex-row gap-3">
      <MailContainerMobileHeader
        folderMails={folderMails}
        setFolderMails={setFolderMails}
        setActiveConversation={setActiveConversation}
      />
      <div className="max-xl:hidden flex gap-3">
        <div className="w-[230px]">
          <MailSidebar />
        </div>
        <MailFolders
          folderMails={folderMails}
          setFolderMails={setFolderMails}
          setActiveConversation={setActiveConversation}
        />
      </div>
      <MailConversation activeConversation={activeConversation} />
    </div>
  );
};

export default MailContainer;

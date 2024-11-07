"use client";

// react
import { useState } from "react";
// constants
import { mails } from "@/constants";
// cmp
import MailFolders from "./MailFolders";
import MailSidebar from "./MailSidebar";

const MailContainer = () => {
  const [folderMails, setFolderMails] = useState(mails);

  return (
    <div className="p-3 rounded-[16px] bg-light2 dark:bg-dark3">
      <div className="max-xl:hidden flex gap-3">
        <MailSidebar />
        <MailFolders folderMails={folderMails} />
      </div>
    </div>
  );
};

export default MailContainer;

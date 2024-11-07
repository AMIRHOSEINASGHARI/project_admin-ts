"use client";

// react
import { useState } from "react";
// cmp
import MailFolders from "./MailFolders";
import MailSidebar from "./MailSidebar";

const MailContainer = () => {
  const [mails, setMails] = useState();

  return (
    <div className="p-3 rounded-[16px] bg-light2 dark:bg-dark3">
      <div className="max-xl:hidden flex gap-3">
        <MailSidebar />
        <MailFolders />
      </div>
    </div>
  );
};

export default MailContainer;

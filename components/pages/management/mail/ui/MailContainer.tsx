// cmp
import MailFolders from "./MailFolders";
import MailSidebar from "./MailSidebar";

const MailContainer = () => {
  return (
    <div className="p-3 rounded-[16px] bg-light2 dark:bg-dark3 h-full">
      <div className="max-xl:hidden flex gap-3 h-full">
        <MailSidebar />
        <MailFolders />
      </div>
    </div>
  );
};

export default MailContainer;

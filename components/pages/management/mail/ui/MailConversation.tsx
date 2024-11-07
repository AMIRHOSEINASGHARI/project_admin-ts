// types
import { Mail } from "@/types/shared";
// cmp
import MailConversationHeader from "./MailConversationHeader";

const MailConversation = ({
  activeConversation,
}: {
  activeConversation: Mail;
}) => {
  return (
    <div className="w-full p-3 rounded-[16px] bg-white dark:bg-dark1">
      <MailConversationHeader
        important={activeConversation?.important}
        starred={activeConversation?.starred}
      />
    </div>
  );
};

export default MailConversation;

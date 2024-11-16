// next
import { Metadata } from "next";
// cmp
import MailPage from "@/components/pages/management/mail/MailPage";

export const metadata: Metadata = {
  title: "Mail",
};

const Mail = () => {
  return <MailPage />;
};

export default Mail;

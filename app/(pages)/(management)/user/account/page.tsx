// next
import { Metadata } from "next";
// cmp
import AccountPage from "@/components/pages/management/user/account/AccountPage";

export const metadata: Metadata = {
  title: "User account",
};

const Account = () => {
  return <AccountPage />;
};

export default Account;

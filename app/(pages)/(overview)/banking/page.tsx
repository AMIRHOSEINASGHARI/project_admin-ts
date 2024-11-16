// next
import { Metadata } from "next";
// cmp
import BankingPage from "@/components/pages/overview/banking/BankingPage";

export const metadata: Metadata = {
  title: "Banking",
};

const Banking = () => {
  return <BankingPage />;
};

export default Banking;

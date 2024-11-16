// next
import { Metadata } from "next";
// types
import { UsersListParams } from "@/types/admin";
// cmp
import UserCardsPage from "@/components/pages/management/user/cards/UserCardsPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "User cards",
};

const UserCards = ({ searchParams }: { searchParams: UsersListParams }) => {
  return <UserCardsPage searchParams={searchParams} />;
};

export default UserCards;

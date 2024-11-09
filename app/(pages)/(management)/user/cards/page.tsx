// types
import { UsersListParams } from "@/types/admin";
// cmp
import UserCardsPage from "@/components/pages/management/user/cards/UserCardsPage";

export const dynamic = "force-dynamic";

const UserCards = ({ searchParams }: { searchParams: UsersListParams }) => {
  return <UserCardsPage searchParams={searchParams} />;
};

export default UserCards;

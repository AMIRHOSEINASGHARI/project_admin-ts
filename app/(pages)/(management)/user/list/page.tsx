// next
import { Metadata } from "next";
// types
import { UsersListParams } from "@/types/admin";
// cmp
import UserListPage from "@/components/pages/management/user/list/UserListPage";

export const metadata: Metadata = {
  title: "User list",
};

const UserList = ({
  searchParams,
}: {
  searchParams: Promise<UsersListParams>;
}) => {
  return <UserListPage searchParams={searchParams} />;
};

export default UserList;

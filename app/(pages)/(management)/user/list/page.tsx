// types
import { UsersListParams } from "@/types/admin";
// cmp
import UserListPage from "@/components/pages/management/user/list/UserListPage";

const UserList = ({
  searchParams,
}: {
  searchParams: Promise<UsersListParams>;
}) => {
  return <UserListPage searchParams={searchParams} />;
};

export default UserList;

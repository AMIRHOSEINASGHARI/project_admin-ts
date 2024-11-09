// next
import Link from "next/link";
// types
import { UsersListParams } from "@/types/admin";
// constants
import { user_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserList from "./ui/UserList";

const UserListPage = ({
  searchParams,
}: {
  searchParams: Promise<UsersListParams>;
}) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <PageHeading text="List" />
          <CustomBreadcrumb
            data={user_list_page_breadcrumb_data}
            breadcrumbPage="List"
          />
        </div>
        <Button asChild>
          <Link href="/user/create" className="gap-2">
            <PlusRegular />
            New user
          </Link>
        </Button>
      </div>
      <UserList searchParams={searchParams} />
    </>
  );
};

export default UserListPage;

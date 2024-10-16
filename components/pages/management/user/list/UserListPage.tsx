// next
import Link from "next/link";
// acitons
import { getAdmins } from "@/actions/admin";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { user_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserListTable from "./ui/UserListTable";

const UserListPage = async () => {
  const data = await getAdmins();

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
      <UserListTable admins={jsonParser(data?.admins)} />
    </>
  );
};

export default UserListPage;

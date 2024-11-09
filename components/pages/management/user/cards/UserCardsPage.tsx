// next
import Link from "next/link";
// acitons
import { getAdmins } from "@/actions/admin";
// types
import { UsersListParams } from "@/types/admin";
// constants
import { user_cards_page_breadcrumb_data } from "@/constants/breadcrumbs";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserCardsList from "./ui/UserCardsList";
import { Button } from "@/components/ui/button";

const UserCardsPage = async ({
  searchParams,
}: {
  searchParams: UsersListParams;
}) => {
  const data = await getAdmins(searchParams);

  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <PageHeading text="User cards" />
          <CustomBreadcrumb
            data={user_cards_page_breadcrumb_data}
            breadcrumbPage="Cards"
          />
        </div>
        <Button asChild>
          <Link href="/user/create" className="gap-2">
            <PlusRegular />
            New user
          </Link>
        </Button>
      </div>
      <UserCardsList admins={data?.admins} />
    </>
  );
};

export default UserCardsPage;

// actions
import { getCurrentAdmin } from "@/actions/admin";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { user_profile_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserForm from "../shared/UserForm";

const AccountPage = async () => {
  const data = await getCurrentAdmin();

  return (
    <>
      <PageHeading text="Account" />
      <CustomBreadcrumb
        data={user_profile_page_breadcrumb_data}
        breadcrumbPage="Account"
      />
      <UserForm type="edit" user={jsonParser(data?.admin)} />
    </>
  );
};

export default AccountPage;

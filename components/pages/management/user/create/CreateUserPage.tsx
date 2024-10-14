// constants
import { user_create_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserForm from "../shared/UserForm";

const CreateUserPage = () => {
  return (
    <>
      <PageHeading text="Create a new user" />
      <CustomBreadcrumb
        data={user_create_page_breadcrumb_data}
        breadcrumbPage="New user"
      />
      <UserForm type="create" />
    </>
  );
};

export default CreateUserPage;

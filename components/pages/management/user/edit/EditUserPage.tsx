// next
import { notFound, redirect } from "next/navigation";
// actions
import { getAdmin } from "@/actions/admin";
// utils
import { getServerSession } from "@/utils/session";
import { jsonParser } from "@/utils/functions";
// constants
import { user_create_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserForm from "../shared/UserForm";

const EditUserPage = async ({ id }: { id: string }) => {
  const session = getServerSession();

  if (id === session?.userId) redirect("/user/account");

  const data = await getAdmin(id);

  if (!data?.admin) notFound();

  return (
    <>
      <PageHeading text="Edit" />
      <CustomBreadcrumb
        data={user_create_page_breadcrumb_data}
        breadcrumbPage={data?.admin?.name || data?.admin?.username || ""}
      />
      <UserForm type="edit" user={jsonParser(data?.admin)} />
    </>
  );
};

export default EditUserPage;

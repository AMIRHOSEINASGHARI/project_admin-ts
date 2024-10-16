// next
import Link from "next/link";
// utils
import { getServerSession } from "@/utils/session";
// constants
import { user_create_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import UserForm from "../shared/UserForm";
import { getAdmin } from "@/actions/admin";
import { notFound } from "next/navigation";

const EditUserPage = async ({ id }: { id: string }) => {
  const session = getServerSession();

  if (id === session?.userId) {
    return (
      <div>
        If you want to edit your profile data, go to{" "}
        <Button
          asChild
          variant="action"
          className="text-blue-500 hover:bg-transparent dark:hover:bg-transparent hover:underline"
        >
          <Link href="/user/account">Account page</Link>
        </Button>
      </div>
    );
  }

  const data = await getAdmin(id);

  if (!data?.admin) notFound();

  return (
    <>
      <PageHeading text="Edit" />
      <CustomBreadcrumb
        data={user_create_page_breadcrumb_data}
        breadcrumbPage={data?.admin?.name || data?.admin?.username || ""}
      />
      <UserForm type="edit" user={JSON.parse(JSON.stringify(data?.admin))} />
    </>
  );
};

export default EditUserPage;

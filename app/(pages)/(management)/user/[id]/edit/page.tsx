// actions
import { getAdmin } from "@/actions/admin";
// types
import { PageParams } from "@/types/pages";
// cmp
import EditUserPage from "@/components/pages/management/user/edit/EditUserPage";

const EditUser = ({ params: { id } }: PageParams) => {
  return <EditUserPage id={id} />;
};

export default EditUser;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getAdmin(id);

  return {
    title: `Edit ${data?.admin?.name}`,
  };
}

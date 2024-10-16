// types
import { PageParams } from "@/types/pages";
// cmp
import EditUserPage from "@/components/pages/management/user/edit/EditUserPage";

const EditUser = ({ params: { id } }: PageParams) => {
  return <EditUserPage id={id} />;
};

export default EditUser;

// types
import { PageParams } from "@/types/pages";
// cmp
import EditJobPage from "@/components/pages/management/job/edit/EditJobPage";

const EditJob = ({ params: { id } }: PageParams) => {
  return <EditJobPage id={id} />;
};

export default EditJob;

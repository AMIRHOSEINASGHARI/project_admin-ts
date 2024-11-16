// actions
import { getJob } from "@/actions/job";
// types
import { PageParams } from "@/types/pages";
// cmp
import EditJobPage from "@/components/pages/management/job/edit/EditJobPage";

const EditJob = ({ params: { id } }: PageParams) => {
  return <EditJobPage id={id} />;
};

export default EditJob;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getJob(id);

  return {
    title: `Edit ${data?.job?.title}`,
  };
}

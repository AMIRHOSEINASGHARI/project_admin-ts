// actions
import { getJob } from "@/actions/job";
// types
import { PageParams } from "@/types/pages";
// cmp
import JobDetailsPage from "@/components/pages/management/job/details/JobDetailsPage";

const Job = ({ params: { id } }: PageParams) => {
  return <JobDetailsPage id={id} />;
};

export default Job;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getJob(id);

  return {
    title: data?.job?.title,
  };
}

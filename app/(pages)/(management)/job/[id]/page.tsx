// types
import { PageParams } from "@/types/pages";
// cmp
import JobDetailsPage from "@/components/pages/management/job/details/JobDetailsPage";

const Job = ({ params: { id } }: PageParams) => {
  return <JobDetailsPage id={id} />;
};

export default Job;

// types
import { JobsListParams } from "@/types/job";
// cmp
import JobListPage from "@/components/pages/management/job/list/JobListPage";

const Jobs = ({ searchParams }: { searchParams: Promise<JobsListParams> }) => {
  return <JobListPage searchParams={searchParams} />;
};

export default Jobs;

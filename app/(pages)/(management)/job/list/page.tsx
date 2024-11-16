//next
import { Metadata } from "next";
// types
import { JobsListParams } from "@/types/job";
// cmp
import JobListPage from "@/components/pages/management/job/list/JobListPage";

export const metadata: Metadata = {
  title: "Jobs list",
};

const Jobs = ({ searchParams }: { searchParams: Promise<JobsListParams> }) => {
  return <JobListPage searchParams={searchParams} />;
};

export default Jobs;

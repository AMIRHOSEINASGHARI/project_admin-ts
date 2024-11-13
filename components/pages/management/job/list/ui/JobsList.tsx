// cmp
import { JobsListParams } from "@/types/job";
// actions
import { getJobs } from "@/actions/job";
// cmp
import JobCard from "./JobCard";
import NoData from "@/components/shared/NoData";

const JobsList = async ({ searchParams }: { searchParams: JobsListParams }) => {
  const data = await getJobs(searchParams);

  return (
    <>
      {data?.jobs?.length === 0 ? (
        <NoData title="No jobs found" />
      ) : (
        <div className="listGrid1">
          {data?.jobs.map((job) => (
            <JobCard key={job?._id} job={job} />
          ))}
        </div>
      )}
    </>
  );
};

export default JobsList;

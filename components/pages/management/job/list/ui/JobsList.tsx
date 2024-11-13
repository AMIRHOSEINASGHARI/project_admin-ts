// cmp
import { JobsListParams } from "@/types/job";
// actions
import { getJobs } from "@/actions/job";
// cmp
import SearchJobs from "./SearchJobs";
import JobCard from "./JobCard";
import NoData from "@/components/shared/NoData";
// import FilterJobs from "./FilterJobs";

const JobsList = async ({ searchParams }: { searchParams: JobsListParams }) => {
  const data = await getJobs(searchParams);

  return (
    <div>
      <div className="flex items-center flex-wrap max-xl:gap-4 xl:flex-nowrap justify-between w-full mb-8">
        <SearchJobs />
        {/* <FilterJobs /> */}
      </div>
      {data?.jobs?.length === 0 ? (
        <NoData title="No jobs found" />
      ) : (
        <div className="listGrid1">
          {data?.jobs.map((job) => (
            <JobCard key={job?._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;

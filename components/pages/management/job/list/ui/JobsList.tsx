// cmp
import { JobType } from "@/types/job";
// cmp
import SearchJobs from "./SearchJobs";
import FilterJobs from "./FilterJobs";
import JobCard from "./JobCard";
import NoData from "@/components/shared/NoData";

const JobsList = ({ jobs }: { jobs: JobType[] }) => {
  return (
    <div>
      <div className="flex items-center flex-wrap max-xl:gap-4 xl:flex-nowrap justify-between w-full mb-8">
        <SearchJobs />
        <FilterJobs />
      </div>
      {jobs?.length === 0 ? (
        <NoData title="No jobs found" />
      ) : (
        <div className="listGrid1">
          {jobs.map((job) => (
            <JobCard key={job?._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;

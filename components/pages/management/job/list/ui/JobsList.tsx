// cmp
import { JobType } from "@/types/job";
// cmp
import SearchJobs from "./SearchJobs";
import FilterJobs from "./FilterJobs";
import JobCard from "./JobCard";

const JobsList = ({ jobs }: { jobs: JobType[] }) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full mb-8">
        <SearchJobs />
        <FilterJobs />
      </div>
      {jobs?.length === 0 ? (
        "no data"
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job?._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;

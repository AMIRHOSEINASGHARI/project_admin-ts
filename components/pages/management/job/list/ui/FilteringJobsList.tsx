// cmp
import SearchJobs from "./SearchJobs";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const FilteringJobsList = () => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <SearchJobs />
      <DeletePageQueries
        filters={[
          {
            value: "search",
            title: "Search",
          },
        ]}
      />
    </div>
  );
};

export default FilteringJobsList;

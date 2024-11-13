// cmp
import SearchTours from "./SearchTours";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const FilteringToursList = () => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <SearchTours />
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

export default FilteringToursList;

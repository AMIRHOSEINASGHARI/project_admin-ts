// actions
import { getTours } from "@/actions/tour";
// types
import { ToursListParams } from "@/types/tour";
// cmp
import SearchTours from "./SearchTours";
import FilterTours from "./FilterTours";
import TourCard from "./TourCard";
import NoData from "@/components/shared/NoData";

const ToursList = async ({
  searchParams,
}: {
  searchParams: ToursListParams;
}) => {
  const data = await getTours();

  return (
    <div>
      <div className="flex items-center flex-wrap max-xl:gap-4 xl:flex-nowrap justify-between w-full mb-8">
        <SearchTours />
        <FilterTours />
      </div>
      {data?.tours?.length === 0 ? (
        <NoData title="No tours found!" />
      ) : (
        <div className="listGrid1">
          {data?.tours?.map((tour) => (
            <TourCard key={tour?._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToursList;

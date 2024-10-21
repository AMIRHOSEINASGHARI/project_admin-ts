// cmp
import { TourType } from "@/types/tour";
// cmp
import SearchTours from "./SearchTours";
import FilterTours from "./FilterTours";
import TourCard from "./TourCard";

const ToursList = ({ tours }: { tours: TourType[] }) => {
  return (
    <div>
      <div className="flex items-center flex-wrap max-xl:gap-4 xl:flex-nowrap justify-between w-full mb-8">
        <SearchTours />
        <FilterTours />
      </div>
      {tours?.length === 0 ? (
        "no data"
      ) : (
        <div className="listGrid1">
          {tours.map((tour) => (
            <TourCard key={tour?._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToursList;

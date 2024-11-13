// actions
import { getTours } from "@/actions/tour";
// types
import { ToursListParams } from "@/types/tour";
// cmp
import SearchTours from "./SearchTours";
import TourCard from "./TourCard";
import NoData from "@/components/shared/NoData";

const ToursList = async ({
  searchParams,
}: {
  searchParams: ToursListParams;
}) => {
  const data = await getTours(searchParams);

  return (
    <>
      {data?.tours?.length === 0 ? (
        <NoData title="No tours found!" />
      ) : (
        <div className="listGrid1">
          {data?.tours?.map((tour) => (
            <TourCard key={tour?._id} tour={tour} />
          ))}
        </div>
      )}
    </>
  );
};

export default ToursList;

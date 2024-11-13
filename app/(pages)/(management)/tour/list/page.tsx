// types
import { ToursListParams } from "@/types/tour";
// cmp
import TourListPage from "@/components/pages/management/tour/list/TourListPage";

const Tour = ({ searchParams }: { searchParams: Promise<ToursListParams> }) => {
  return <TourListPage searchParams={searchParams} />;
};

export default Tour;

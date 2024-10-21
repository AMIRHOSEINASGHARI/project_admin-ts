// types
import { PageParams } from "@/types/pages";
// cmp
import TourDetailsPage from "@/components/pages/management/tour/details/TourDetailsPage";

const TourDetails = ({ params: { id } }: PageParams) => {
  return <TourDetailsPage id={id} />;
};

export default TourDetails;

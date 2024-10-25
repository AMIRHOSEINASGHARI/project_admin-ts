// types
import { PageParams } from "@/types/pages";
// cmp
import EditTourPage from "@/components/pages/management/tour/edit/EditTourPage";

const EditTour = ({ params: { id } }: PageParams) => {
  return <EditTourPage id={id} />;
};

export default EditTour;

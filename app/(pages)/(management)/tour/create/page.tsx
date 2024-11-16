// next
import { Metadata } from "next";
// cmp
import CreateTourPage from "@/components/pages/management/tour/create/CreateTourPage";

export const metadata: Metadata = {
  title: "Create a new tour",
};

const CreateTour = () => {
  return <CreateTourPage />;
};

export default CreateTour;

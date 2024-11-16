// next
import { Metadata } from "next";
// types
import { ToursListParams } from "@/types/tour";
// cmp
import TourListPage from "@/components/pages/management/tour/list/TourListPage";

export const metadata: Metadata = {
  title: "Tours list",
};

const Tour = ({ searchParams }: { searchParams: Promise<ToursListParams> }) => {
  return <TourListPage searchParams={searchParams} />;
};

export default Tour;

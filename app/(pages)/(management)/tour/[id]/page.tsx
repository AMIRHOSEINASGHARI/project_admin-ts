// actions
import { getTour } from "@/actions/tour";
// types
import { PageParams } from "@/types/pages";
// cmp
import TourDetailsPage from "@/components/pages/management/tour/details/TourDetailsPage";

const TourDetails = ({ params: { id } }: PageParams) => {
  return <TourDetailsPage id={id} />;
};

export default TourDetails;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getTour(id);

  return {
    title: data?.tour?.name,
    keywords: data?.tour?.tags,
  };
}

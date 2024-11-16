// actions
import { getTour } from "@/actions/tour";
// types
import { PageParams } from "@/types/pages";
// cmp
import EditTourPage from "@/components/pages/management/tour/edit/EditTourPage";

const EditTour = ({ params: { id } }: PageParams) => {
  return <EditTourPage id={id} />;
};

export default EditTour;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getTour(id);

  return {
    title: `Edit ${data?.tour?.name}`,
    keywords: data?.tour?.tags,
  };
}

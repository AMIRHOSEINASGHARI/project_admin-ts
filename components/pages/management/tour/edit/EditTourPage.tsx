// next
import { notFound } from "next/navigation";
// actions
import { getTour } from "@/actions/tour";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { create_tour_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import TourForm from "@/components/shared/tour-form/TourForm";

const EditTourPage = async ({ id }: { id: string }) => {
  const data = await getTour(id);

  if (!data?.tour) notFound();

  return (
    <>
      <PageHeading text="Edit" />
      <CustomBreadcrumb
        data={create_tour_page_breadcrumb_data}
        breadcrumbPage={data?.tour?.name || "Edit tour"}
      />
      <TourForm type="edit" tour={jsonParser(data?.tour)} />
    </>
  );
};

export default EditTourPage;

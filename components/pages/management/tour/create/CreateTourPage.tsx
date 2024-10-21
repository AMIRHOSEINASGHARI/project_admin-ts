// constants
import { create_tour_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const CreateTourPage = () => {
  return (
    <>
      <PageHeading text="Create a new tour" />
      <CustomBreadcrumb
        data={create_tour_page_breadcrumb_data}
        breadcrumbPage="New tour"
      />
    </>
  );
};

export default CreateTourPage;

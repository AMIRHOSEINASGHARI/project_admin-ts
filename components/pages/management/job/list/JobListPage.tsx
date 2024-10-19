// actions
import {} from "@/actions/job";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { job_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const JobListPage = () => {
  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={job_list_page_breadcrumb_data}
        breadcrumbPage="List"
      />
    </>
  );
};

export default JobListPage;

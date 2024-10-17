// constants
import { create_job__page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import JobForm from "@/components/shared/job-form/JobForm";

const CreateJobPage = () => {
  return (
    <>
      <PageHeading text="Create a new job" />
      <CustomBreadcrumb
        data={create_job__page_breadcrumb_data}
        breadcrumbPage="New job"
      />
      <JobForm />
    </>
  );
};

export default CreateJobPage;

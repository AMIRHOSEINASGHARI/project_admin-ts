// next
import { notFound } from "next/navigation";
// actions
import { getJob } from "@/actions/job";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { create_job__page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import JobForm from "@/components/shared/job-form/JobForm";

const EditJobPage = async ({ id }: { id: string }) => {
  const data = await getJob(id);

  if (!data?.job) notFound();

  return (
    <>
      <PageHeading text="Create a new job" />
      <CustomBreadcrumb
        data={create_job__page_breadcrumb_data}
        breadcrumbPage="New job"
      />
      <JobForm type="edit" job={jsonParser(data?.job)} />
    </>
  );
};

export default EditJobPage;

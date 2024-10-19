// next
import Link from "next/link";
// actions
import { getAdmins } from "@/actions/job";
// constants
import { job_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import JobsList from "./ui/JobsList";

const JobListPage = async () => {
  const data = await getAdmins();

  return (
    <>
      <div className="flex justify-between gap-2">
        <div>
          <PageHeading text="List" />
          <CustomBreadcrumb
            data={job_list_page_breadcrumb_data}
            breadcrumbPage="List"
          />
        </div>
        <div className="flex justify-end mb-10">
          <Button asChild className="h-fit">
            <Link href="/job/create" className="gap-2">
              <PlusRegular />
              New job
            </Link>
          </Button>
        </div>
      </div>
      <JobsList jobs={data?.jobs} />
    </>
  );
};

export default JobListPage;

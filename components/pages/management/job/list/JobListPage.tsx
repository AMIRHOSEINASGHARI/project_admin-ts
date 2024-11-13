// react
import { Suspense } from "react";
// next
import Link from "next/link";
// constants
import { job_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// types
import { JobsListParams } from "@/types/job";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import JobsList from "./ui/JobsList";
import SuspenseFallback from "@/components/shared/SuspenseFallback";

const JobListPage = async (props: {
  searchParams: Promise<JobsListParams>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

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
      <Suspense key={search} fallback={<SuspenseFallback />}>
        <JobsList searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default JobListPage;

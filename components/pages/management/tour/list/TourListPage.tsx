// react
import { Suspense } from "react";
// next
import Link from "next/link";
// types
import { ToursListParams } from "@/types/tour";
// constants
import { tour_list_page_breadcrumb_data } from "@/constants/breadcrumbs";
// icons
import { PlusRegular } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import ToursList from "./ui/ToursList";
import SuspenseFallback from "@/components/shared/SuspenseFallback";
import FilteringToursList from "./ui/FilteringToursList";

const TourListPage = async (props: {
  searchParams: Promise<ToursListParams>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

  return (
    <>
      <div className="flex justify-between gap-2">
        <div>
          <PageHeading text="List" />
          <CustomBreadcrumb
            data={tour_list_page_breadcrumb_data}
            breadcrumbPage="List"
          />
        </div>
        <div className="flex justify-end mb-10">
          <Button asChild className="h-fit">
            <Link href="/tour/create" className="gap-2">
              <PlusRegular />
              New tour
            </Link>
          </Button>
        </div>
      </div>
      <FilteringToursList />
      <Suspense key={search} fallback={<SuspenseFallback />}>
        <ToursList searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default TourListPage;

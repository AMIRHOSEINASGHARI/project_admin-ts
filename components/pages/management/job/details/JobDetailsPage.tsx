// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getJob } from "@/actions/job";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import JobHeadingActions from "./ui/JobHeadingActions";
import JobDetailsTabs from "./ui/JobDetailsTabs";

const JobDetailsPage = async ({ id }: { id: string }) => {
  const data = await getJob(id);

  if (!data?.job) notFound();

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <Button asChild variant="action">
          <Link href="/job/list">
            <SolarAltArrowLeftLineDuotone />
            Back
          </Link>
        </Button>
        <JobHeadingActions
          id={id}
          published={data?.job?.properties?.published}
        />
      </div>
      <JobDetailsTabs job={data?.job} />
    </div>
  );
};

export default JobDetailsPage;

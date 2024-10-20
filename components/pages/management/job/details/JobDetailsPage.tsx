// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getJob } from "@/actions/job";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import JobHeadingActions from "./ui/JobHeadingActions";
import { Button } from "@/components/ui/button";

const JobDetailsPage = async ({ id }: { id: string }) => {
  const data = await getJob(id);

  if (!data?.job) notFound();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button asChild variant="action">
          <Link href="/product/list">
            <SolarAltArrowLeftLineDuotone />
            Back
          </Link>
        </Button>
        <JobHeadingActions
          id={id}
          published={data?.job?.properties?.published}
        />
      </div>
    </div>
  );
};

export default JobDetailsPage;

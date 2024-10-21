// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getTour } from "@/actions/tour";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import TourHeadingActions from "./ui/TourHeadingActions";
import TourDetailsTabs from "./ui/TourDetailsTabs";

const TourDetailsPage = async ({ id }: { id: string }) => {
  const data = await getTour(id);

  if (!data?.tour) notFound();

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <Button asChild variant="action">
          <Link href="/tour/list">
            <SolarAltArrowLeftLineDuotone />
            Back
          </Link>
        </Button>
        <TourHeadingActions id={id} published={data?.tour?.published} />
      </div>
      <TourDetailsTabs tour={data?.tour} />
    </div>
  );
};

export default TourDetailsPage;

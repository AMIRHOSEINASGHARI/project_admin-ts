// next
import Link from "next/link";
import Image from "next/image";
// types
import { JobType } from "@/types/job";
// constants
import { images } from "@/constants";
// cmp
import {
  SolarBarChart,
  SolarClockCircleBoldDuotone,
  SolarOverflowMenuVertical,
  SolarSalary,
  SolarUserCircleBoldDuotone,
  SolarUsersGroupRoundedBoldDuotone,
} from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import moment from "moment";

const JobCard = ({ job }: { job: JobType }) => {
  const {
    _id,
    title,
    properties: { image, experience, employmentType, salary, role },
    createdAt,
  } = job;
  return (
    <Card className="relative" style={{ padding: 0 }}>
      <Button variant="icon" className="absolute top-2 right-2">
        <SolarOverflowMenuVertical />
      </Button>
      <div className="pt-card px-card flex flex-col gap-2">
        <div className="rounded-product overflow-hidden w-[50px] h-[50px]">
          <Image
            src={image || images.noImage}
            width={150}
            height={150}
            alt="image"
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <Button variant="linkSecondary" asChild>
          <Link href={`/job/${_id}`} className="w-fit">
            {title}
          </Link>
        </Button>
        <span className="text-[var(--text-disabled)] text-small">
          Posted date: {moment(createdAt).format("ll")}
        </span>
        <div className="flex items-center gap-1 text-primary-1">
          <SolarUsersGroupRoundedBoldDuotone className="text-md" />
          <span className="text-small">12 candidates</span>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="pb-card px-card grid grid-cols-2 gap-3">
        <div className="flex items-center gap-1 text-[var(--text-disabled)]">
          <SolarBarChart />
          <span className="text-small">{experience}</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--text-disabled)]">
          <SolarClockCircleBoldDuotone />
          <span className="text-small">{employmentType}</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--text-disabled)]">
          <SolarSalary />
          <span className="text-small">{salary}</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--text-disabled)]">
          <SolarUserCircleBoldDuotone />
          <span className="text-small">{role}</span>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;

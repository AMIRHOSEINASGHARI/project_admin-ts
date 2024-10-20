// next
import Image from "next/image";
// types
import { JobContentDetailsProps } from "@/types/components";
import { JobType } from "@/types/job";
// icons
import {
  SolarBarChart,
  SolarCalendar2,
  SolarClockCircleBoldDuotone,
  SolarSalary,
} from "@/components/svg";
// cmp
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import View from "@/components/shared/layout/View";
import moment from "moment";

const JobContent = (props: { job: JobType }) => {
  const {
    job: {
      title,
      content,
      properties: {
        address,
        benefits,
        company,
        employmentType,
        experience,
        expired,
        image,
        phoneNumber,
        price,
        published,
        salary,
        skills,
      },
      createdAt,
    },
  } = props;

  return (
    <View variant="flex-gap" className="w-full">
      <Card className="w-full xl:w-[70%] h-fit">
        <CardHeader>
          <CardTitle className="bold-value">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <MainContent content={content} skills={skills} benefits={benefits} />
        </CardContent>
      </Card>
      <Details
        address={address}
        company={company}
        createdAt={createdAt}
        employmentType={employmentType}
        experience={experience}
        expired={expired}
        image={image}
        phoneNumber={phoneNumber}
        price={price}
        published={published}
        salary={salary}
      />
    </View>
  );
};

export default JobContent;

const MainContent = ({
  content,
  skills,
  benefits,
}: {
  content: string;
  skills: string[];
  benefits: string[];
}) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="tiptap my-10"
      />
      <div className="space-y-7">
        <div className="flex flex-col gap-3">
          <span className="bold-value-3">Skills</span>
          <div className="flex flex-wrap gap-4 items-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="gray">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="bold-value-3">Benefits</span>
          <div className="flex flex-wrap gap-4 items-center">
            {benefits.map((benefit, index) => (
              <Badge key={index} variant="gray">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Details = ({
  address,
  company,
  employmentType,
  experience,
  expired,
  image,
  phoneNumber,
  price,
  published,
  salary,
  createdAt,
}: JobContentDetailsProps) => {
  const list = [
    {
      id: "1",
      icon: <SolarCalendar2 />,
      title: "Date posted",
      value: moment(createdAt).format("ll"),
    },
    {
      id: "2",
      icon: <SolarCalendar2 />,
      title: "Expiration date",
      value: moment(expired).format("ll"),
    },
    {
      id: "3",
      icon: <SolarClockCircleBoldDuotone />,
      title: "Employment type",
      value: employmentType,
    },
    {
      id: "4",
      icon: <SolarSalary />,
      title: "Offered salary",
      value: salary,
    },
    {
      id: "5",
      icon: <SolarBarChart />,
      title: "Experience",
      value: experience,
    },
  ];

  return (
    <View orientation="vertical" className="w-full xl:w-[30%] h-fit">
      <Card className="space-y-5">
        {list.map(({ id, icon, title, value }) => (
          <div key={id} className="flex gap-4">
            <div className="text-xl">{icon}</div>
            <div className="flex flex-col gap-1">
              <span className="text-[var(--text-disabled)] text-sm">
                {title}
              </span>
              <span className="font-medium text-sm">{value}</span>
            </div>
          </div>
        ))}
      </Card>
      <Card className="flex gap-4">
        <div className="w-[64px] h-[64px] rounded-product overflow-hidden shrink-0">
          <Image
            src={image}
            width={100}
            height={100}
            alt="image"
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <span className="text-sm font-semibold">{company}</span>
          <span className="text-sm line-clamp-2">{address}</span>
          <span className="text-sm">{phoneNumber}</span>
        </div>
      </Card>
    </View>
  );
};

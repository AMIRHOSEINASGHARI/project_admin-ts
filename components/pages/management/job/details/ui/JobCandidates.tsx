// constants
import { images, jobCandidates_callToActionList } from "@/constants";
// mock
import { fakeUsers } from "@/mock/users";
// icons
import { SolarOverflowMenuVertical } from "@/components/svg";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const JobCandidates = () => {
  return (
    <div className="listGrid1">
      {fakeUsers.splice(0, 12).map(({ id, name, company, image }) => (
        <Card key={id} className="relative">
          <Button
            variant="icon"
            type="button"
            className="absolute top-2 right-2"
          >
            <SolarOverflowMenuVertical />
          </Button>
          <div className="flex gap-4 items-center">
            <Avatar size="lg">
              <AvatarImage src={image || images.admin} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="line-clamp-1 text-small font-medium">
                {name}
              </span>
              <span className="text_disabled">{company}</span>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2 ml-[63px] mt-2">
            {jobCandidates_callToActionList.map((item) => (
              <Button
                key={item.id}
                type="button"
                variant="icon"
                className={`${item.className} rounded-lg text-[16px] p-1.5`}
              >
                {item.icon}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default JobCandidates;

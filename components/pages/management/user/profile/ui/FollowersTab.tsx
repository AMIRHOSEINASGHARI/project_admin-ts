// constants
import { images } from "@/constants";
// mock
import { fakeUsers } from "@/mock/users";
// icons
import { CheckRegular, SolarMapPointWaveBoldDuotone } from "@/components/svg";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageHeading from "@/components/shared/PageHeading";
import clsx from "clsx";

const FollowersTab = () => {
  return (
    <div>
      <PageHeading text="Followers" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {fakeUsers.map(({ id, image, name, location }, index) => {
          const isFollowed =
            index === 4 || index === 5 || index === 6 || index === 7;

          return (
            <Card key={id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarImage src={image || images.admin} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-small line-clamp-1">
                    {name}
                  </span>
                  <div className="flex items-center text-[var(--text-disabled)]">
                    <div className="w-6 h-5 flex items-center">
                      <SolarMapPointWaveBoldDuotone />
                    </div>
                    <span className="line-clamp-1 text-small">{location}</span>
                  </div>
                </div>
              </div>
              <Button
                type="button"
                variant={isFollowed ? "ghost" : "outline"}
                className={clsx(
                  "py-1 text-small font-semibold",
                  isFollowed &&
                    "bg-transparent text-green-500 hover:bg-green-100 dark:bg-transparent dark:text-green-500 dark:hover:bg-green-950 dark:hover:text-green-300 gap-2"
                )}
              >
                {isFollowed && <CheckRegular />}
                {isFollowed ? "Followed" : "Follow"}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersTab;

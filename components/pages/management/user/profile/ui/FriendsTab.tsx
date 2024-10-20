// mock
import { fakeUsers } from "@/mock/users";
// constants
import { images, profilePage_friendsTab_social_data } from "@/constants";
// icons
import { CheckFill, SolarOverflowMenuVertical } from "@/components/svg";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FriendsTab = () => {
  return (
    <div>
      <PageHeading text="Friends" />
      <div className="listGrid1">
        {fakeUsers.map(({ id, company, email, image, isVerified, name }) => (
          <Card key={id} className="relative">
            <Button variant="icon" className="absolute right-2 top-2">
              <SolarOverflowMenuVertical />
            </Button>
            <div className="flex flex-col items-center justify-center gap-2">
              <Avatar size="lg" className="mb-3">
                <AvatarImage src={image || images.admin} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1">
                {isVerified && <CheckFill className="text-lg text-green-500" />}
                <span className="username line-clamp-1">{name}</span>
              </div>
              <span className="line-clamp-1 text_disabled">{email}</span>
              <div className="flex items-center gap-1">
                {profilePage_friendsTab_social_data.map(({ id, icon }) => (
                  <Button
                    key={id}
                    variant="icon"
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    {icon}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FriendsTab;

// constants
import { blogDetailsPage_comments } from "@/constants";
// icons
import { SolarPenBoldDuotone } from "@/components/svg";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CommentsSection = () => {
  return (
    <div className="space-y-8">
      {blogDetailsPage_comments.map(({ user, date, text }, index) => (
        <div key={user.id} className="flex gap-5 w-full">
          <Avatar size="lg">
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <span className="username line-clamp-1">{user.name}</span>
              <Button variant="action" type="button">
                <SolarPenBoldDuotone className="text-md" />
                Reply
              </Button>
            </div>
            <span className="text_disabled">{date}</span>
            <p className="text-small mt-3 mb-6">{text}</p>
            {blogDetailsPage_comments.length - 1 > index && <Separator />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;

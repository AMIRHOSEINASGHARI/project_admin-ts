// types
import { AdminType } from "@/types/admin";
// constants
import { images, userCardsPage_social_data } from "@/constants";
// icons
import { CheckFill } from "@/components/svg";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NoData from "@/components/shared/NoData";

const UserCardsList = ({ admins }: { admins: AdminType[] }) => {
  if (admins?.length === 0) return <NoData title="No users found!" />;

  return (
    <div className="listGrid1">
      {admins.map(({ _id, avatar, name, role, isVerified }) => (
        <Card key={_id} style={{ padding: 0 }}>
          <div className="flex flex-col items-center justify-center gap-2 p-card">
            <Avatar size="lg" className="mb-3">
              <AvatarImage src={avatar || images.admin} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1">
              {isVerified && <CheckFill className="text-lg text-green-500" />}
              <span className="username line-clamp-1">{name}</span>
            </div>
            <span className="line-clamp-1 text_disabled">{role}</span>
            <div className="flex items-center gap-1">
              {userCardsPage_social_data.map(({ id, icon }) => (
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
          <Separator />
          <div className="p-card grid grid-cols-3 gap-1">
            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-xs text-slate-500">Follower</span>
              <span className="bold-value-3">9.91k</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-xs text-slate-500">Following</span>
              <span className="bold-value-3">1.95k</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-xs text-slate-500">Total post</span>
              <span className="bold-value-3">9.12k</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserCardsList;

// mock
import { fakeUsers } from "@/mock/users";
// icons
import { SolarHeartBold } from "@/components/svg";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LikesSection = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <SolarHeartBold className="text-rose-500 text-icon-size" />
        <span className="text-small">2.03k</span>
      </div>
      <div className="flex items-center gap-1">
        {fakeUsers.splice(0, 3).map((item) => (
          <Avatar key={item.id} size="sm">
            <AvatarImage src={item.image} />
            <AvatarFallback>{item.name[0]}</AvatarFallback>
          </Avatar>
        ))}
        <div className="bg-primary-4 text-sm text-primary-1 rounded-full h-8 w-8 flex items-center justify-center">
          +17
        </div>
      </div>
    </div>
  );
};

export default LikesSection;

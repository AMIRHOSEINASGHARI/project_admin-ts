// cmp
import View from "@/components/shared/layout/View";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProfileTab = () => {
  return (
    <View variant="flex-gap">
      <View orientation="vertical" className="w-full xl:w-[35%]">
        <FollowersBox />
      </View>
    </View>
  );
};

export default ProfileTab;

const FollowersBox = () => {
  return (
    <Card className="flex items-center w-full justify-between">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="bold-value">1,947</span>
        <span className="text-[var(--text-disabled)] text-sm">Follower</span>
      </div>
      <Separator orientation="vertical" className="h-[50px]" />
      <div className="flex flex-col items-center justify-center w-full">
        <span className="bold-value">9,124</span>
        <span className="text-[var(--text-disabled)] text-sm">Following</span>
      </div>
    </Card>
  );
};

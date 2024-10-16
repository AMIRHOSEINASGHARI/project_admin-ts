// utils
import { getServerSession } from "@/utils/session";
import { jsonParser } from "@/utils/functions";
// constants
import { images } from "@/constants";
// cmp
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import CopyID from "./CopyID";

const UserProfile = () => {
  const session = getServerSession();

  if (!session) return null;

  if (session) {
    return (
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="w-[90px] h-[90px] relative flex items-center justify-center">
          <Avatar className="w-[97%] h-[97%] absolute z-20 border-4 border-white dark:border-dark2">
            <AvatarImage src={session?.avatar || images.admin} />
            <AvatarFallback>
              <Skeleton className="rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-t from-primary-1 to-white dark:to-dark2 rounded-full animate-spin-slow" />
        </div>
        <span className="font-semibold text-sm">
          {session?.name || session?.username}
        </span>
        <CopyID userId={jsonParser(session?.userId)} />
      </div>
    );
  }
};

export default UserProfile;

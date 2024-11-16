// mock
import { fakeUsers } from "@/mock/users";
// icons
import { SolarUsersGroupRoundedBoldDuotone } from "@/components/svg";
// cmp
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import View from "./View";

const Contacts = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="icon">
          <SolarUsersGroupRoundedBoldDuotone />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-[400px] max-w-[300px] relative overflow-hidden">
        <div className="bg-white p-2 dark:bg-dark3 absolute z-10 top-0 left-0 w-full">
          <h6 className="h6">Contacts (20)</h6>
        </div>
        <View className="flex flex-col gap-2 overflow-auto hideScrollBar w-full h-full mt-[40px] pb-[40px]">
          {fakeUsers.map(({ id, image, name, email }) => (
            <Button
              key={id}
              variant="ghost"
              className="bg-transparent justify-start gap-4"
            >
              <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-small font-medium line-clamp-1">
                  {name}
                </span>
                <span className="text-x-small text-[var(--text-disabled)] line-clamp-1">
                  {email}
                </span>
              </div>
            </Button>
          ))}
        </View>
      </PopoverContent>
    </Popover>
  );
};

export default Contacts;

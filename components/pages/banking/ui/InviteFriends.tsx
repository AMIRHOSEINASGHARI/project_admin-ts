// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const InviteFriends = () => {
  return (
    <Card className="p-10 bg-gradient-to-br from-primary-1 to-primary-2 flex flex-col gap-3">
      <div className="text-white flex justify-between">
        <div className="flex flex-col gap-2 w-1/3">
          <span className="font-semibold">Invite friends and earn</span>
          <span className="font-black text-[50px]">$50</span>
        </div>
        <div className="w-2/3 flex justify-end">
          <Image
            src={images.inviteAndEarn}
            width={200}
            height={200}
            alt="image"
            priority
            className="w-[120px]"
          />
        </div>
      </div>
      <p className="text-small text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        provident?
      </p>
      <div className="bg-dark1/20 dark:bg-dark1/20 rounded-xl flex items-center p-1.5">
        <Input
          placeholder="Email"
          className="border-none py-1 pl-2 pr-1 bg-transparent dark:bg-transparent rounded-xl text-light3 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:ring-offset-0 placeholder:text-slate-400"
        />
        <Button className="bg-theme-yellow text-dark1 hover:bg-theme-yellow dark:bg-theme-yellow dark:text-dark1 dark:hover:bg-theme-yellow">
          Invite
        </Button>
      </div>
    </Card>
  );
};

export default InviteFriends;

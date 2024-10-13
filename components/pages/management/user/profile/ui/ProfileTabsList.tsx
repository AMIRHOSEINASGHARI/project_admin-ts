// next
import Image from "next/image";
// types
import { ProfileTabsListProps } from "@/types/components";
// cmp
import {
  SolarAddImageBold,
  SolarHeartBold,
  SolarUserCdBoldDuotone,
  SolarUsersGroupRoundedBoldDuotone,
} from "@/components/svg";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTabsList = ({ name, avatar, roll }: ProfileTabsListProps) => {
  return (
    <Tabs defaultValue="account">
      <Card
        className="h-[290px] w-full relative overflow-hidden"
        style={{
          padding: 0,
        }}
      >
        <Image
          src="/images/covers/cover_1.jpg"
          width={1920}
          height={1080}
          alt="header"
          priority
          className="w-full h-full object-cover"
        />
        <div className="bg-primary-2 opacity-80 w-full h-full absolute inset-0 z-10" />
        <div className="absolute max-xl:w-full max-xl:h-full flex max-xl:items-center max-xl:flex-col gap-6 max-xl:py-10 max-xl:top-0 xl:left-7 xl:bottom-7 z-30">
          <Image
            src={avatar}
            width={300}
            height={300}
            alt="avatar"
            priority
            className="w-[60px] xl:w-[124px] h-[60px] xl:h-[124px] rounded-full"
          />
          <div className="flex flex-col max-xl:text-center gap-1 xl:mt-7">
            <span className="text-white dark:text-white font-bold text-large">
              {name}
            </span>
            <span className="text-[var(--text-disabled)] text-small">
              {roll}
            </span>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center xl:justify-end dark:bg-dark3 absolute z-20 bottom-0 right-0 left-0 w-full px-card">
          <TabsList className="bg-transparent flex items-center gap-5 w-fit">
            <TabsTrigger
              value="profile"
              className="bg-transparent flex items-center gap-2 py-3 border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white dark:data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white rounded-none"
            >
              <SolarUserCdBoldDuotone className="icon" /> Profile
            </TabsTrigger>
            <TabsTrigger
              value="followers"
              className="bg-transparent flex items-center gap-2 py-3 border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white dark:data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white rounded-none"
            >
              <SolarHeartBold className="icon" /> Followers
            </TabsTrigger>
            <TabsTrigger
              value="friends"
              className="bg-transparent flex items-center gap-2 py-3 border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white dark:data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white rounded-none"
            >
              <SolarUsersGroupRoundedBoldDuotone className="icon" /> Friends
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="bg-transparent flex items-center gap-2 py-3 border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white dark:data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white rounded-none"
            >
              <SolarAddImageBold className="icon" /> Gallery
            </TabsTrigger>
          </TabsList>
        </div>
      </Card>
      <div className="mt-10">
        <TabsContent value="profile">profile</TabsContent>
      </div>
    </Tabs>
  );
};

export default ProfileTabsList;

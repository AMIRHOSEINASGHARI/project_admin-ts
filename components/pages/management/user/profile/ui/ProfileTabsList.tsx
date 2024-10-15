// next
import Image from "next/image";
// types
import { ProfileTabsListProps } from "@/types/components";
// constants
import { profilePage_tabs_data } from "@/constants";
// cmp
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTabsList = ({ name, avatar, roll }: ProfileTabsListProps) => {
  return (
    <Tabs defaultValue={profilePage_tabs_data[0].value}>
      <Card
        className="h-[290px] w-full relative overflow-hidden mb-10"
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
        <div className="bg-primary-2 opacity-80 w-full h-full absolute inset-0 z-[1]" />
        <div className="absolute max-xl:w-full max-xl:h-full flex max-xl:items-center max-xl:flex-col gap-6 max-xl:py-10 max-xl:top-0 xl:left-7 xl:bottom-7 z-[3]">
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
        <div className="bg-white flex items-center justify-center xl:justify-end dark:bg-dark3 absolute z-[4] xl:z-[2] bottom-0 right-0 left-0 w-full px-card">
          <TabsList className="bg-transparent flex items-center gap-5 w-fit">
            {profilePage_tabs_data.map(({ value, title, icon }) => (
              <div key={value}>
                <TabsTrigger
                  value={value}
                  className="bg-transparent flex items-center gap-2 py-3 border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white dark:data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white rounded-none"
                >
                  {icon} {title}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>
        </div>
      </Card>
      <div>
        {profilePage_tabs_data.map(({ value, content }) => (
          <TabsContent value={value} key={value}>
            {content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default ProfileTabsList;

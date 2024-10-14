"use client";

// next
import Image from "next/image";
// services
import { fetchCurrentAdmin } from "@/services/queries";
// react query
import { useQuery } from "@tanstack/react-query";
// constants
import {
  images,
  profilePage_profileTab_postsBox_data,
  profilePage_profileTab_socialBox_links,
} from "@/constants";
// icons
import {
  SolarDocumentsBoldDuotone,
  SolarLetterBoldDuotone,
  SolarMapPointWaveBoldDuotone,
  SolarVideocameraRecordBoldDuotone,
  SolarImages,
  SolarOverflowMenuVertical,
  SolarHeartBold,
  SolarChatRoundDotsBoldDuotone,
  SolarShareBoldDuotone,
  SolarAddImageBold,
  SolarSmileEmoji,
} from "@/components/svg";
// cmp
import Loader from "@/components/shared/Loader";
import View from "@/components/shared/layout/View";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const ProfileTab = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-admin"],
    queryFn: fetchCurrentAdmin,
  });

  return (
    <View variant="flex-gap">
      <View orientation="vertical" className="w-full xl:w-[35%]">
        <FollowersBox />
        <AboutBox data={data} isError={isError} isLoading={isLoading} />
        <SocialBox />
      </View>
      <View orientation="vertical" className="w-full xl:w-[65%]">
        <TextBox />
        <PostsBox
          name={data?.admin?.name}
          avatar={data?.admin?.avatar}
          isLoading={isLoading}
          isError={isError}
        />
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

const AboutBox = ({
  data,
  isLoading,
  isError,
}: {
  data: any;
  isLoading: boolean;
  isError: boolean;
}) => {
  const list = [
    {
      key: "country",
      text: "Live at ",
      value: data?.admin?.country,
      icon: (
        <SolarMapPointWaveBoldDuotone className="text-icon-size dark:text-white text-black" />
      ),
    },
    {
      key: "email",
      text: "",
      value: data?.admin?.email,
      icon: (
        <SolarLetterBoldDuotone className="text-icon-size dark:text-white text-black" />
      ),
    },
    {
      key: "state",
      text: "CTO at ",
      value: data?.admin?.state,
      icon: (
        <SolarDocumentsBoldDuotone className="text-icon-size dark:text-white text-black" />
      ),
    },
    {
      key: "city",
      text: "Studied at ",
      value: data?.admin?.city,
      icon: (
        <SolarDocumentsBoldDuotone className="text-icon-size dark:text-white text-black" />
      ),
    },
  ];

  return (
    <Card>
      {isLoading && (
        <div className="flex w-full h-full justify-center items-center">
          <Loader />
        </div>
      )}
      {isError && <p>Error!</p>}
      {!isLoading && !isError && data?.admin && (
        <>
          <CardHeader>
            <CardTitle>About</CardTitle>
            {data?.admin?.about && (
              <CardDescription className="pt-6 text-black dark:text-white">
                {data?.admin?.about}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {list.map(({ icon, key, value, text }) => (
                <li key={key} className="flex items-center gap-5">
                  {icon}{" "}
                  {value ? (
                    <p className="text-sm">
                      {text}
                      <span className="font-bold hover:underline">{value}</span>
                    </p>
                  ) : (
                    "_"
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </>
      )}
    </Card>
  );
};

const SocialBox = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {profilePage_profileTab_socialBox_links.map(({ icon, link }) => (
            <li
              key={link}
              className="flex items-center gap-5 overflow-hidden w-full"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                {icon}
              </div>
              <p className="line-clamp-3 text-sm hover:underline">{link}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const TextBox = () => {
  return (
    <Card className="space-y-5">
      <Textarea placeholder="Share what you are thinking here..." rows={5} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button type="button" variant="ghost" className="rounded-full gap-2">
            <SolarImages className="text-icon-size text-green-500" />
            <span className="font-bold">Image/Video</span>
          </Button>
          <Button type="button" variant="ghost" className="rounded-full gap-2">
            <SolarVideocameraRecordBoldDuotone className="text-icon-size text-rose-500" />
            <span className="font-bold">Streaming</span>
          </Button>
        </div>
        <Button type="button">Post</Button>
      </div>
    </Card>
  );
};

const PostsBox = ({
  name,
  avatar,
  isLoading,
  isError,
}: {
  name: string;
  avatar: string;
  isLoading: boolean;
  isError: boolean;
}) => {
  return (
    <div className="space-y-5">
      {isLoading && (
        <div className="flex w-full h-full justify-center items-center">
          <Loader />
        </div>
      )}
      {isError && <p>Error!</p>}
      {!isLoading && !isError && name && (
        <>
          {profilePage_profileTab_postsBox_data.map(
            ({ id, comments, image, likes, title }) => (
              <Card key={id} className="space-y-5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={avatar || images.admin} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <span className="text-small font-bold">{name}</span>
                      <span className="text_disabled">14 Oct 2024</span>
                    </div>
                  </div>
                  <Button type="button" variant="icon">
                    <SolarOverflowMenuVertical />
                  </Button>
                </div>
                <p className="text-small">{title}</p>
                <Image
                  src={image}
                  width={1920}
                  height={1080}
                  alt="image"
                  priority
                  className="rounded-card"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SolarHeartBold className="text-xl text-rose-500" />
                    <span className="text-small">{likes}</span>
                  </div>
                  <div>
                    <Button type="button" variant="icon" className="text-xl">
                      <SolarChatRoundDotsBoldDuotone />
                    </Button>
                    <Button type="button" variant="icon" className="text-xl">
                      <SolarShareBoldDuotone />
                    </Button>
                  </div>
                </div>
                {comments.length !== 0 &&
                  comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 w-full">
                      <Avatar>
                        <AvatarImage src={comment.avatar || images.person} />
                        <AvatarFallback>{comment.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="w-full bg-light2 dark:bg-dark3 rounded-card p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-small">{comment.name}</span>
                          <span className="text_disabled">{comment.date}</span>
                        </div>
                        <p className="text_disabled">{comment.comment}</p>
                      </div>
                    </div>
                  ))}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={avatar || images.admin} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="relative w-full">
                    <Input
                      placeholder="Write a comment..."
                      className="w-full h-[40px] pr-[70px]"
                    />
                    <div className="flex items-center gap-1 absolute right-1 top-[5px]">
                      <Button
                        type="button"
                        variant="icon"
                        className="text-xl p-1"
                      >
                        <SolarAddImageBold />
                      </Button>
                      <Button
                        type="button"
                        variant="icon"
                        className="text-xl p-1"
                      >
                        <SolarSmileEmoji />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          )}
        </>
      )}
    </div>
  );
};

"use client";

// services
import { fetchCurrentAdmin } from "@/services/queries";
// react query
import { useQuery } from "@tanstack/react-query";
// icons
import {
  Facebook,
  Instagram,
  SolarDocumentsBoldDuotone,
  SolarLetterBoldDuotone,
  SolarMapPointWaveBoldDuotone,
  Twitter,
} from "@/components/svg";
import { Linkedin } from "lucide-react";
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

const ProfileTab = () => {
  return (
    <View variant="flex-gap">
      <View orientation="vertical" className="w-full xl:w-[35%]">
        <FollowersBox />
        <AboutBox />
        <SocialBox />
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

const AboutBox = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-admin"],
    queryFn: fetchCurrentAdmin,
  });

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
  const links = [
    {
      icon: <Facebook className="text-xl text-blue-500" />,
      link: "https://www.facebook.com/caitlyn.kerluke",
    },
    {
      icon: <Instagram className="text-xl text-rose-500" />,
      link: "https://www.instagram.com/caitlyn.kerluke",
    },
    {
      icon: <Linkedin className="text-xl text-blue-700" />,
      link: "https://www.linkedin.com/in/caitlyn.kerluke",
    },
    {
      icon: <Twitter className="text-xl text-black dark:text-white" />,
      link: "https://www.twitter.com/caitlyn.kerluke",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {links.map(({ icon, link }) => (
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

"use client";

// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// types
import { Mail, MailLabel } from "@/types/shared";
// icons
import {
  SolarDraftBold,
  SolarExlamationBold,
  SolarImportantBold,
  SolarLabelBold,
  SolarMailBold,
  SolarMailInboxBold,
  SolarSendBold,
  SolarStarBold,
  SolarTrashBold,
} from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import MailCompose from "./MailCompose";
import clsx from "clsx";

const MailSidebar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const activeLabel = params?.get("label");

  const sideMenuItems: { icon: JSX.Element; id: MailLabel }[] = [
    {
      icon: <SolarMailBold />,
      id: "all",
    },
    {
      icon: <SolarMailInboxBold />,
      id: "inbox",
    },
    {
      icon: <SolarSendBold />,
      id: "sent",
    },
    {
      icon: <SolarDraftBold />,
      id: "drafts",
    },
    {
      icon: <SolarTrashBold />,
      id: "trash",
    },
    {
      icon: <SolarExlamationBold />,
      id: "spam",
    },
    {
      icon: <SolarImportantBold />,
      id: "important",
    },
    {
      icon: <SolarStarBold />,
      id: "starred",
    },
    {
      icon: <SolarLabelBold className="text-green-500" />,
      id: "social",
    },
    {
      icon: <SolarLabelBold className="text-yellow-500" />,
      id: "promotions",
    },
    {
      icon: <SolarLabelBold className="text-rose-500" />,
      id: "forums",
    },
  ];

  const handleLabel = (label: MailLabel) => {
    if (params.has("id")) {
      params.delete("id");
    }

    if (label) {
      params.set("label", label);
    } else {
      params.delete("label");
    }

    replace(`${pathname}?${params?.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="p-3">
        <MailCompose />
      </div>
      <div className="flex flex-col gap-1">
        {sideMenuItems.map(({ id, icon }) => (
          <Button
            key={id}
            variant="ghost"
            className={clsx(
              "justify-start gap-4 bg-transparent dark:bg-transparent",
              {
                "text-black dark:text-white": activeLabel === id,
                "text-icon-light dark:text-icon-dark": activeLabel !== id,
              }
            )}
            onClick={() => handleLabel(id)}
          >
            <div className="text-icon-size">{icon}</div>
            <span className="capitalize">{id}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MailSidebar;

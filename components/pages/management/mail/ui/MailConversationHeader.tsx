// types
import { MailConversationHeaderProps } from "@/types/components";
// icons
import {
  SolarArchiveBold,
  SolarImportantBold,
  SolarOverflowMenuVertical,
  SolarStarBold,
  SolarTrashBold,
  SolarUnreadLetterBold,
} from "@/components/svg";
// cmp
import CustomTooltip from "@/components/shared/CustomTooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MailConversationHeader = ({
  important,
  starred,
  label,
}: MailConversationHeaderProps) => {
  const actions = [
    {
      id: "Starred",
      icon: <SolarStarBold className={starred ? "text-yellow-500" : ""} />,
    },
    {
      id: "Important",
      icon: (
        <SolarImportantBold className={important ? "text-yellow-500" : ""} />
      ),
    },
    {
      id: "Archive",
      icon: <SolarArchiveBold />,
    },
    {
      id: "Mark unread",
      icon: <SolarUnreadLetterBold />,
    },
    {
      id: "Trash",
      icon: <SolarTrashBold />,
    },
    {
      id: "More",
      icon: <SolarOverflowMenuVertical />,
    },
  ];

  return (
    <div className="flex justify-between items-center p-3">
      {(label === "social" || label === "forums" || label === "promotions") && (
        <Badge
          variant={
            label === "social"
              ? "green"
              : label === "promotions"
              ? "orange"
              : "rose"
          }
          className="w-fit h-fit capitalize"
        >
          {label}
        </Badge>
      )}

      <div className="flex items-center w-full justify-end flex-wrap gap-1">
        {actions.map(({ id, icon }) => (
          <CustomTooltip
            key={id}
            trigger={
              <Button variant="icon" className="text-xl">
                {icon}
              </Button>
            }
            content={id}
          />
        ))}
      </div>
    </div>
  );
};

export default MailConversationHeader;

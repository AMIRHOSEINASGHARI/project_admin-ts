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

const MailConversationHeader = ({
  important,
  starred,
}: MailConversationHeaderProps) => {
  const actions = [
    {
      id: "Starred",
      icon: <SolarStarBold className={starred && "text-yellow-500"} />,
    },
    {
      id: "Important",
      icon: <SolarImportantBold className={important && "text-yellow-500"} />,
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
    <div className="flex items-center justify-end flex-wrap gap-1">
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
  );
};

export default MailConversationHeader;

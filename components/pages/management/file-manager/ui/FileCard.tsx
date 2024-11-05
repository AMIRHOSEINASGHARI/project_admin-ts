// types
import { File } from "@/types/shared";
// icons
import {
  SolarOverflowMenuVertical,
  StarFill,
  StarRegular,
} from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import moment from "moment";

const FileCard = ({
  file: { icon, important, size, name, modified },
}: {
  file: File;
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[250px] border border-border-light dark:border-border-dark p-[20px] rounded-card hover:shadow-2xl Transition hover:shadow-gray-200 dark:hover:bg-dark3 dark:hover:shadow-black/30 cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="text-[36px]">{icon}</div>
        <div className="flex items-center gap-1">
          <Button variant="icon" className="text-xl">
            {important ? (
              <StarFill className="text-yellow-500" />
            ) : (
              <StarRegular />
            )}
          </Button>
          <Button variant="icon" className="text-xl">
            <SolarOverflowMenuVertical />
          </Button>
        </div>
      </div>
      <span className="bold-value-3">{name}</span>
      <span className="text_disabled">
        {size} / {moment(modified).format("lll")}
      </span>
    </div>
  );
};

export default FileCard;

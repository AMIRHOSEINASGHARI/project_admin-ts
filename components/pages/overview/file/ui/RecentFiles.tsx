// constants
import { files } from "@/constants";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import { Button } from "@/components/ui/button";
import moment from "moment";
// icons
import {
  SolarOverflowMenuVertical,
  StarFill,
  StarRegular,
} from "@/components/svg";

const RecentFiles = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="bold-value-3">Recent files</span>
        <CardAttatchmentButton href="/file-manager" />
      </div>
      {files
        .filter((item) => item.type !== "folder")
        .splice(0, 8)
        .map(({ id, icon, name, modified, size, important }) => (
          <div
            key={id}
            className="flex items-start justify-between hover:shadow-2xl Transition hover:shadow-gray-200 dark:hover:bg-dark3 dark:hover:shadow-black/30 cursor-pointer p-4 rounded-card border border-border-light dark:border-border-dark"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="text-[36px]">{icon}</div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm line-clamp-1">{name}</span>
                <span className="text_disabled">
                  {size} &#8226; {moment(modified).format("lll")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="icon">
                {important ? (
                  <StarFill className="text-yellow-500" />
                ) : (
                  <StarRegular />
                )}
              </Button>
              <Button variant="icon">
                <SolarOverflowMenuVertical />
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecentFiles;

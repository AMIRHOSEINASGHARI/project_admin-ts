// constants
import { files } from "@/constants";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import {
  SolarOverflowMenuVertical,
  StarFill,
  StarRegular,
} from "@/components/svg";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import moment from "moment";

const Folders = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="bold-value-3">Folders</span>
        <CardAttatchmentButton href="/file-manager" />
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 mb-5">
          {files
            .filter((item) => item.type === "folder")
            .map(({ id, icon, important, modified, name, size }) => (
              <div
                key={id}
                className="flex flex-col gap-2 min-w-[250px] border border-border-light dark:border-border-dark p-[20px] rounded-card"
              >
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
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Folders;

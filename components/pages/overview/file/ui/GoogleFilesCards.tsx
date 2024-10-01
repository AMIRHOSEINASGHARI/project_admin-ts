// next
import Image from "next/image";
// constants
import { filePage_googleFilesCards_data } from "@/constants";
// icons
import { SolarOverflowMenuVertical } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const GoogleFilesCards = () => {
  return (
    <View variant="flex-wrap">
      {filePage_googleFilesCards_data.map(
        ({ title, currentSize, image, totalSize }) => (
          <Card
            key={title}
            className="flex flex-1 flex-col gap-5 min-w-[250px]"
          >
            <div className="flex justify-between">
              <Image
                src={image}
                width={100}
                height={100}
                alt={title}
                priority
                className="w-[60px] h-[60px]"
              />
              <Button variant="icon" className="w-fit h-fit">
                <SolarOverflowMenuVertical />
              </Button>
            </div>
            <div className="space-y-3">
              <span className="bold-value-3">{title}</span>
              <Progress
                value={currentSize}
                max={totalSize}
                rootClassName="bg-gray-300 dark:bg-gray-700 h-[6px]"
              />

              <p className="text-right text-small font-medium">
                <span className="text-[var(--text-disabled)]">
                  {currentSize} Gb
                </span>
                <span> / {totalSize} Gb</span>
              </p>
            </div>
          </Card>
        )
      )}
    </View>
  );
};

export default GoogleFilesCards;

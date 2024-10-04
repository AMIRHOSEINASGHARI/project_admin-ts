// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Folders = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="bold-value-3">Folders</span>
        <CardAttatchmentButton href="/file-manager" />
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">s</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Folders;

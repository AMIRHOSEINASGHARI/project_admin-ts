// constants
import { files } from "@/constants";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import FileCard from "@/components/pages/management/file-manager/ui/FileCard";

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
            .map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Folders;

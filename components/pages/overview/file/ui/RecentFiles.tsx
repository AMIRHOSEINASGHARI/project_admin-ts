// constants
import { files } from "@/constants";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import FileCard from "@/components/pages/management/file-manager/ui/FileCard";

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
        .map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
    </div>
  );
};

export default RecentFiles;

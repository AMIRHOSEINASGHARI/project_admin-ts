// constants
import { files } from "@/constants";
// cmp
import { Separator } from "@/components/ui/separator";
import FileCard from "./FileCard";

const FilesList = () => {
  return (
    <div className="space-y-8">
      <Folders />
      <Separator />
      <Files />
    </div>
  );
};

export default FilesList;

const Folders = () => {
  const folders = files.filter((file) => file.type === "folder");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h5 className="h5">Folders</h5>
        <span className="text_disabled">{folders.length} folders</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {folders.map((item) => (
          <FileCard key={item.id} file={item} />
        ))}
      </div>
    </div>
  );
};

const Files = () => {
  const otherFiles = files.filter((file) => file.type !== "folder");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h5 className="h5">Files</h5>
        <span className="text_disabled">{otherFiles.length} files</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {otherFiles.map((item) => (
          <FileCard key={item.id} file={item} />
        ))}
      </div>
    </div>
  );
};

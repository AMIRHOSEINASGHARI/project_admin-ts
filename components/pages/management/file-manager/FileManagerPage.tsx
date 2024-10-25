// icons
import { SolarCloudUploadBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import PageHeading from "@/components/shared/PageHeading";
import SearchFiles from "./ui/SearchFiles";

const FileManagerPage = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <PageHeading text="File manager" />
        <Button type="button" className="gap-2">
          <SolarCloudUploadBoldDuotone className="text-icon-size" />
          Upload
        </Button>
      </div>
      <div className="flex items-center flex-wrap max-xl:gap-4 xl:flex-nowrap justify-between w-full mb-8">
        <SearchFiles />
      </div>
    </div>
  );
};

export default FileManagerPage;

// icons
import { SolarCloudUploadBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import PageHeading from "@/components/shared/PageHeading";

const FileManagerPage = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <PageHeading text="File manager" />
        <Button type="button" className="gap-2">
          <SolarCloudUploadBoldDuotone className="text-icon-size" />
          Upload
        </Button>
      </div>
    </>
  );
};

export default FileManagerPage;

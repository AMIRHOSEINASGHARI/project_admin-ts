"use client";

// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// icons
import {
  SolarCloudUploadBoldDuotone,
  SolarDocumentsBoldDuotone,
} from "@/components/svg";

const PublishFilter = () => {
  return (
    <Select>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="Publish" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="published">
          <div className="flex items-center gap-2">
            <div className="text-xl text-icon-light dark:text-icon-dark">
              <SolarCloudUploadBoldDuotone />
            </div>
            <span>Published</span>
          </div>
        </SelectItem>
        <SelectItem value="draft">
          {" "}
          <div className="flex items-center gap-2">
            <div className="text-xl text-icon-light dark:text-icon-dark">
              <SolarDocumentsBoldDuotone />
            </div>
            <span>Draft</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PublishFilter;

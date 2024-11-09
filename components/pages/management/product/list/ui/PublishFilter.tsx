"use client";

// react
import { useEffect, useState } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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
  const [publish, setPublish] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePublish = (publish: string) => {
    const params = new URLSearchParams(searchParams);

    if (publish) {
      params.set("published", publish);
    } else {
      params.delete("published");
    }

    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("published")) {
      setPublish("");
    } else {
      setPublish(searchParams.get("published")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Select onValueChange={(e) => handlePublish(e)} value={publish}>
      <SelectTrigger className="py-[15px] px-[14px] flex flex-1 min-w-[250px] rounded-md border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm">
        <SelectValue placeholder="Publish" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="publish">
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

"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// icons
import {
  SolarCloudUploadBoldDuotone,
  SolarDocumentsBoldDuotone,
  SolarPenBoldDuotone,
  SolarSquareShareLineBoldDuotone,
} from "@/components/svg";
// cmp
import CustomTooltip from "@/components/shared/CustomTooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type BlogStatus = "Published" | "Draft";
type BlogHeadingActionsProps = {
  id: string;
  published: boolean;
};

const BlogHeadingActions = ({ id, published }: BlogHeadingActionsProps) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"Published" | "Draft">(
    published ? "Published" : "Draft"
  );

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center gap-3">
      <CustomTooltip
        trigger={
          <Button asChild variant="icon">
            <Link
              href={`${process.env.NEXT_PUBLIC_LIVE_URL}/blogs/${id}`}
              target="_blank"
            >
              <SolarSquareShareLineBoldDuotone />
            </Link>
          </Button>
        }
        content="Live"
      />
      <CustomTooltip
        trigger={
          <Button asChild variant="icon">
            <Link href={`/blog/${id}/edit`}>
              <SolarPenBoldDuotone />
            </Link>
          </Button>
        }
        content="Edit"
      />
      <Select
        open={open}
        onOpenChange={onOpenChange}
        value={status}
        onValueChange={(value: BlogStatus) => setStatus(value)}
      >
        <SelectTrigger className="gap-2 bg-dark1 text-white hover:bg-dark3 hover:text-white dark:bg-white dark:text-black dark:hover:bg-light3 dark:hover:text-black Transition">
          {status}
        </SelectTrigger>
        <SelectContent className="min-w-[170px]">
          <SelectItem value="Published">
            <div className="flex items-center gap-2">
              <SolarCloudUploadBoldDuotone className="text-icon-size" />{" "}
              Published
            </div>
          </SelectItem>
          <SelectItem value="Draft">
            <div className="flex items-center gap-2">
              <SolarDocumentsBoldDuotone className="text-icon-size" /> Draft
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogHeadingActions;

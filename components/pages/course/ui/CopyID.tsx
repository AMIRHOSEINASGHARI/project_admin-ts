"use client";

// utils
import { shorterText } from "@/utils/functions";
// icons
import { SolarCopyBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import CustomTooltip from "@/components/shared/CustomTooltip";
import toast from "react-hot-toast";

const CopyID = ({ userId }: { userId: string }) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(userId);
    toast.success("ID Copied!");
  };

  return (
    <div className="flex items-center gap-1">
      <span className="text-small text-slate-500">
        ID: {shorterText(userId, 5, false)}
      </span>
      <CustomTooltip
        trigger={
          <Button variant="icon" className="text-lg" onClick={copyHandler}>
            <SolarCopyBoldDuotone />
          </Button>
        }
        content="Copy"
      />
    </div>
  );
};

export default CopyID;

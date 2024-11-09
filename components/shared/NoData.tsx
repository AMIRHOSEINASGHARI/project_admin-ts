// next
import Image from "next/image";
// constants
import { images } from "@/constants";

type NoDataProps = {
  title?: string;
  subText?: string;
};

const NoData = ({ title, subText }: NoDataProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
      <Image
        src={images.emptyFolder}
        width={200}
        height={200}
        alt="empty"
        priority
      />
      {title && (
        <span className="text-[var(--text-disabled)] font-bold text-md">
          {title}
        </span>
      )}
      {subText && (
        <span className="text-[var(--text-disabled)] text-xs">{subText}</span>
      )}
    </div>
  );
};

export default NoData;

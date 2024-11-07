// next
import Image from "next/image";

type MailEmptyBoxProps = {
  title: string;
  subText: string;
  type: "folder" | "conversation";
};

const MailEmptyBox = ({ title, subText, type }: MailEmptyBoxProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
      <Image
        src={
          type === "conversation"
            ? "/images/email-selected.svg"
            : "/images/folder-empty.svg"
        }
        width={200}
        height={200}
        alt="mail-selected"
        priority
      />
      <span className="text-[var(--text-disabled)] font-bold text-md">
        {title}
      </span>
      <span className="text-[var(--text-disabled)] text-xs">{subText}</span>
    </div>
  );
};

export default MailEmptyBox;

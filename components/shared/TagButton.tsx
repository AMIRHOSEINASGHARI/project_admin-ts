"use client";

import { HTMLAttributes } from "react";
import { CrossRegular } from "../svg";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import clsx from "clsx";

type TagButtonProps = {
  name: string;
  variant:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "green"
    | "blue"
    | "orange"
    | "slate"
    | "gray"
    | "rose"
    | "favorite"
    | null
    | undefined;
  buttonColor?: string;
  removeHandler: () => void;
};

const TagButton = ({
  name,
  variant,
  buttonColor,
  removeHandler,
}: TagButtonProps) => {
  return (
    <Badge
      variant={variant}
      className="text-[13px] font-normal px-[7px] py-[2px] rounded-[8px] flex items-center gap-2"
    >
      <span>{name}</span>
      <Button
        onClick={removeHandler}
        className={clsx(
          "bg-blue-800/50 dark:bg-blue-400/30 dark:text-white rounded-full text-[5px] w-fit h-fit p-[5px]",
          buttonColor
        )}
      >
        <CrossRegular />
      </Button>
    </Badge>
  );
};

export default TagButton;

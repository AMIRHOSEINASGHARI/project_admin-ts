import clsx from "clsx";
import React from "react";

const View = ({
  children,
  orientation,
  className,
  variant,
}: {
  children: React.ReactNode;
  orientation?: "vertical" | "horizental";
  className?: string;
  variant?: "flex-wrap" | "flex-gap";
}) => {
  return (
    <div
      className={clsx("w-full", className || "", {
        "space-y-5": orientation === "vertical",
        "space-x-5": orientation === "horizental",
        "flex flex-wrap gap-5": variant === "flex-wrap",
        "flex flex-col xl:flex-row gap-5": variant === "flex-gap",
      })}
    >
      {children}
    </div>
  );
};

export default View;

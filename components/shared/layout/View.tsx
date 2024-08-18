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
  variant?: "flex-wrap";
}) => {
  return (
    <div
      className={clsx(className || "", {
        "space-y-5": orientation === "vertical",
        "space-x-5": orientation === "horizental",
        "flex flex-wrap gap-5": variant === "flex-wrap",
      })}
    >
      {children}
    </div>
  );
};

export default View;

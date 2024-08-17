import clsx from "clsx";
import React from "react";

const View = ({
  children,
  orientation,
  className,
}: {
  children: React.ReactNode;
  orientation?: "vertical" | "horizental";
  className?: string;
}) => {
  return (
    <div
      className={clsx(className || "", {
        "space-y-5": orientation === "vertical",
        "space-x-5": orientation === "horizental",
      })}
    >
      {children}
    </div>
  );
};

export default View;

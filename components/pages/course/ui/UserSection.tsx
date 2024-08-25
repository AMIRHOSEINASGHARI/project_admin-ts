import React from "react";

const UserSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-700 w-full xl:w-[30%] h-full">
      {children}
    </div>
  );
};

export default UserSection;

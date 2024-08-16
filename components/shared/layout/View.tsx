import React from "react";

const View = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>;
};

export default View;

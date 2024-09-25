"use client";

import { TailSpin } from "react-loader-spinner";

const Loader = ({
  width,
  height,
  color,
  text,
  strokeWidth,
}: {
  width?: number;
  height?: number;
  color?: string;
  text?: string;
  strokeWidth?: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <TailSpin
        visible={true}
        height={height || 20}
        width={width || 20}
        color={color || "currentColor"}
        ariaLabel="tail-spin-loading"
        radius="1"
        strokeWidth={strokeWidth || 5}
      />
      {text && <p className="text-[12px]">{text}</p>}
    </div>
  );
};

export default Loader;

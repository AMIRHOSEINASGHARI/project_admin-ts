"use client";

import LoaderBar from "@/components/shared/LoaderBar";

const Loading = () => {
  return (
    <div className="flex w-full h-[40vh] justify-center items-center">
      <div className="w-[70%] flex justify-center">
        <LoaderBar />
      </div>
    </div>
  );
};

export default Loading;

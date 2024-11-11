import LoaderBar from "./LoaderBar";

const SuspenseFallback = () => {
  return (
    <div className="w-full p-16 flex items-center justify-center">
      <div className="w-full xl:w-1/2">
        <LoaderBar />
      </div>
    </div>
  );
};

export default SuspenseFallback;

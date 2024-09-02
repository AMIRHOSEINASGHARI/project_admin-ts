import clsx from "clsx";

type CustomHistoryProps = {
  title: string;
  subTitle?: string;
};

const CustomHistory = ({ data }: { data: CustomHistoryProps[] }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {data?.reverse()?.map((item, index) => (
        <div key={item.title} className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-4">
            <div
              className={clsx("rounded-full w-3 h-3 mt-[5px]", {
                "bg-primary-1": index === 0,
                "bg-slate-300 dark:bg-slate-600": index !== 0,
              })}
            />
            {data.length - 1 > index && (
              <div className="bg-slate-300 dark:bg-slate-600 w-[1px] h-[40px]" />
            )}
          </div>
          <div className="overflow-hidden flex flex-col">
            <p className="truncate text-small font-semibold">{item.title}</p>
            {item.subTitle && (
              <span className="truncate text-[var(--text-disabled)] text-small font-light">
                {item.subTitle}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomHistory;

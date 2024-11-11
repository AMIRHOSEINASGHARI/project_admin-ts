"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { SolarTrashBold } from "@/components/svg";
import { Button } from "@/components/ui/button";
import DeleteSearchQuery from "@/components/shared/DeleteSearchQuery";

type DeletePageQueriesProps = {
  filters: {
    value: string;
    title: string;
  }[];
};

const DeletePageQueries = ({ filters }: DeletePageQueriesProps) => {
  const { searchParams, handleDeleteQuery, replace, pathname } =
    useHandleSearchParams();

  const params = new URLSearchParams(searchParams);

  if (params.size === 0) return null;

  const deleteAllQueries = () => {
    for (let filter of filters) {
      if (params.has(filter.value)) {
        params.delete(filter.value);
      }
    }

    replace(pathname);
  };

  return (
    <div className="px-4 pb-4 flex flex-wrap items-center gap-4">
      {filters.map(({ value, title }) => {
        if (!params.has(value)) {
          return null;
        }

        const paramValue = params.get(value) as string;

        return (
          <DeleteSearchQuery
            key={value}
            value={value}
            title={title}
            paramValue={paramValue}
            handleDeleteQuery={() => handleDeleteQuery(value)}
          />
        );
      })}
      <Button
        type="button"
        className="gap-2 p-1.5 bg-transparent text-rose-500 dark:text-rose-500 hover:bg-rose-100 dark:bg-transparent dark:hover:bg-rose-800/20"
        onClick={deleteAllQueries}
      >
        <SolarTrashBold className="text-icon-size" />
        <span className="text-small font-bold">Clear</span>
      </Button>
    </div>
  );
};

export default DeletePageQueries;

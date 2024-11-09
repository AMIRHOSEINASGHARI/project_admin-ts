"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { SolarTrashBold } from "@/components/svg";
import { Button } from "@/components/ui/button";
import DeleteSearchQuery from "@/components/shared/DeleteSearchQuery";

const DeleteFilters = () => {
  const { searchParams, handleDeleteQuery, replace, pathname } =
    useHandleSearchParams();

  const params = new URLSearchParams(searchParams);

  if (params.size === 0) return null;

  const filters = [
    {
      value: "search",
      title: "Search",
    },
    {
      value: "stock",
      title: "Stock",
    },
    {
      value: "category",
      title: "Category",
    },
    {
      value: "published",
      title: "Published",
    },
    {
      value: "discount",
      title: "Discount",
    },
  ];

  const handleDeleteAll = () => {
    params.has("search") && params.delete("search");
    params.has("stock") && params.delete("stock");
    params.has("category") && params.delete("category");
    params.has("published") && params.delete("published");
    params.has("discount") && params.delete("discount");

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
        onClick={handleDeleteAll}
      >
        <SolarTrashBold className="text-icon-size" />
        <span className="text-small font-bold">Clear</span>
      </Button>
    </div>
  );
};

export default DeleteFilters;

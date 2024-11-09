// types
import { DeleteSearchQueryProps } from "@/types/components";
// cmp
import TagButton from "./TagButton";

const DeleteSearchQuery = ({
  value,
  title,
  paramValue,
  handleDeleteQuery,
}: DeleteSearchQueryProps) => {
  return (
    <div
      key={value}
      className="w-fit p-2 rounded-lg flex items-center gap-2 border border-dashed border-border-light dark:border-border-dark"
    >
      <span className="text-small font-bold">{title}:</span>
      <div className="capitalize">
        <TagButton
          name={paramValue}
          variant="gray"
          removeHandler={() => handleDeleteQuery(value)}
          buttonColor="bg-gray-600 text-white dark:bg-gray-400 dark:text-black"
        />
      </div>
    </div>
  );
};

export default DeleteSearchQuery;

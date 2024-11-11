// constants
import { blogsPageQueries } from "@/constants";
// cmp
import BlogsSearchTextFilter from "./BlogsSearchTextFilter";
import BLogsTabSorting from "./BLogsTabSorting";
import SortBlogs from "./SortBlogs";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const FilteringBlogs = () => {
  return (
    <div className="flex flex-col gap-3 mb-8">
      <BLogsTabSorting />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
        <BlogsSearchTextFilter />
        <SortBlogs />
      </div>
      <DeletePageQueries filters={blogsPageQueries} />
    </div>
  );
};

export default FilteringBlogs;

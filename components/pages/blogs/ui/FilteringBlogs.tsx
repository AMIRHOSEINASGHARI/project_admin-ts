// cmp
import BlogsSearchTextFilter from "./BlogsSearchTextFilter";
import BLogsTabSorting from "./BLogsTabSorting";
import SortBlogs from "./SortBlogs";

const FilteringBlogs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
        <BlogsSearchTextFilter />
        <SortBlogs />
      </div>
      <BLogsTabSorting />
    </>
  );
};

export default FilteringBlogs;

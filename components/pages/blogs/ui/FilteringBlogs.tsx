// types
import { BlogType } from "@/types/blog";
// cmp
import BlogsSearchTextFilter from "./BlogsSearchTextFilter";
import BLogsTabSorting from "./BLogsTabSorting";
import SortBlogs from "./SortBlogs";

const FilteringBlogs = ({ blogs }: { blogs: BlogType[] }) => {
  const all_blogs = blogs?.length;
  const published_blogs = blogs?.filter((blog) => blog?.published)?.length;
  const draft_blogs = blogs?.filter((blog) => !blog?.published)?.length;

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
        <BlogsSearchTextFilter />
        <SortBlogs />
      </div>
      <BLogsTabSorting
        all={all_blogs}
        published={published_blogs}
        draft={draft_blogs}
      />
    </>
  );
};

export default FilteringBlogs;

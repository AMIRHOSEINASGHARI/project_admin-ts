// types
import { BlogType } from "@/types/blog";
// cmp
import FilteringBlogs from "./FilteringBlogs";
import BlogCard from "./BlogCard";
import NoData from "@/components/shared/NoData";

const BlogsList = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <div>
      <FilteringBlogs blogs={blogs} />
      {blogs?.length === 0 ? (
        <NoData title="No blogs found!" />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {blogs?.map((blog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsList;

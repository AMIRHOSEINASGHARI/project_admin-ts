// actions
import { getBlogs } from "@/actions/blogs";
// types
import { BlogsListParams } from "@/types/blog";
// cmp
import FilteringBlogs from "./FilteringBlogs";
import BlogCard from "./BlogCard";
import NoData from "@/components/shared/NoData";

const BlogsList = async ({
  searchParams,
}: {
  searchParams: BlogsListParams;
}) => {
  const data = await getBlogs();

  return (
    <div>
      <FilteringBlogs blogs={data?.blogs} />
      {data?.blogs?.length === 0 ? (
        <NoData title="No blogs found!" />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {data?.blogs?.map((blog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsList;

// actions
import { getBlogs } from "@/actions/blogs";
// types
import { BlogsListParams } from "@/types/blog";
// cmp
import BlogCard from "./BlogCard";
import NoData from "@/components/shared/NoData";

const BlogsList = async ({
  searchParams,
}: {
  searchParams: BlogsListParams;
}) => {
  const data = await getBlogs(searchParams);

  if (data?.blogs?.length === 0) {
    return <NoData title="No blogs found!" />;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {data?.blogs?.map((blog) => (
        <BlogCard key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsList;

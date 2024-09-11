// types
import { BlogType } from "@/types/blog";
// cmp
import FilteringBlogs from "./FilteringBlogs";

const BlogsList = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <div>
      <FilteringBlogs />
    </div>
  );
};

export default BlogsList;

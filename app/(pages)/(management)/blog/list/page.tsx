// types
import { BlogsListParams } from "@/types/blog";
// cmp
import BlogsListPage from "@/components/pages/management/blog/list/BlogsListPage";

const BlogsList = ({
  searchParams,
}: {
  searchParams: Promise<BlogsListParams>;
}) => {
  return <BlogsListPage searchParams={searchParams} />;
};

export default BlogsList;

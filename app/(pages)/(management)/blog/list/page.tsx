// next
import { Metadata } from "next";
// types
import { BlogsListParams } from "@/types/blog";
// cmp
import BlogsListPage from "@/components/pages/management/blog/list/BlogsListPage";

export const metadata: Metadata = {
  title: "Blog list",
};

const BlogsList = ({
  searchParams,
}: {
  searchParams: Promise<BlogsListParams>;
}) => {
  return <BlogsListPage searchParams={searchParams} />;
};

export default BlogsList;

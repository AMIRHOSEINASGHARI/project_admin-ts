// types
import { PageParams } from "@/types/pages";
// cmp
import BlogDetailsPage from "@/components/pages/management/blog/details/BlogDetailsPage";

const Blog = ({ params: { id } }: PageParams) => {
  return <BlogDetailsPage id={id} />;
};

export default Blog;

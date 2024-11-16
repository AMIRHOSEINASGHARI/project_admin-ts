// actions
import { getBlog } from "@/actions/blogs";
// types
import { PageParams } from "@/types/pages";
// cmp
import BlogDetailsPage from "@/components/pages/management/blog/details/BlogDetailsPage";

const Blog = ({ params: { id } }: PageParams) => {
  return <BlogDetailsPage id={id} />;
};

export default Blog;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getBlog(id);

  return {
    title: data?.blog?.metaTitle,
    description: data?.blog?.metaDescription,
    keywords: data?.blog?.metaKeywords,
  };
}

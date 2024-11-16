// types
import { PageParams } from "@/types/pages";
// cmp
import EditBlogPage from "@/components/pages/management/blog/edit/EditBlogPage";
import { getBlog } from "@/actions/blogs";

const EditBlog = ({ params: { id } }: PageParams) => {
  return <EditBlogPage id={id} />;
};

export default EditBlog;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getBlog(id);

  return {
    title: `Edit ${data?.blog?.title}`,
    description: data?.blog?.metaDescription,
    keywords: data?.blog?.metaKeywords,
  };
}

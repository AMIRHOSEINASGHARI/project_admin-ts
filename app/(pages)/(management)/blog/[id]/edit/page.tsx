// types
import { PageParams } from "@/types/pages";
// cmp
import EditBlogPage from "@/components/pages/management/blog/edit/EditBlogPage";

const EditBlog = ({ params: { id } }: PageParams) => {
  return <EditBlogPage id={id} />;
};

export default EditBlog;

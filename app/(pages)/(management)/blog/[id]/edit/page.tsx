// types
import { PageParams } from "@/types/pages";
// cmp
import EditBlogPage from "@/components/pages/edit-blog/EditBlogPage";

const EditBlog = ({ params: { id } }: PageParams) => {
  return <EditBlogPage id={id} />;
};

export default EditBlog;

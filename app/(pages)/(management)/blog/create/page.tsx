// next
import { Metadata } from "next";
// cmp
import CreateBlogPage from "@/components/pages/management/blog/create/CreateBlogPage";

export const metadata: Metadata = {
  title: "Create a new blog",
};

const AddBlog = () => {
  return <CreateBlogPage />;
};

export default AddBlog;

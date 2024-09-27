// constants
import { addBlog_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import BlogForm from "@/components/shared/blog-form/BlogForm";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const AddBlogPage = () => {
  return (
    <>
      <PageHeading text="Create a new blog" />
      <CustomBreadcrumb
        data={addBlog_page_breadcrumb_data}
        breadcrumbPage="Create"
      />
      <BlogForm page="add" />
    </>
  );
};

export default AddBlogPage;

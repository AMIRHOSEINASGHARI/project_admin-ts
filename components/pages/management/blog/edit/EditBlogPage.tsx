// next
import { notFound } from "next/navigation";
// actions
import { getBlog } from "@/actions/blogs";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { addBlog_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import BlogForm from "@/components/shared/blog-form/BlogForm";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";

const EditBlogPage = async ({ id }: { id: string }) => {
  const data = await getBlog(id);

  if (!data?.blog) notFound();

  return (
    <>
      <PageHeading text="Edit" />
      <CustomBreadcrumb
        data={addBlog_page_breadcrumb_data}
        breadcrumbPage={data?.blog?.title}
      />
      <BlogForm page="edit" blog={jsonParser(data?.blog)} />
    </>
  );
};

export default EditBlogPage;

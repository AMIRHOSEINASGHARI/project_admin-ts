// next
import Link from "next/link";
// constants
import { blogs_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
// icons
import { PlusRegular } from "@/components/svg";
import BlogsList from "./ui/BlogsList";
import { getBlogs } from "@/actions/blogs";

const BlogsPage = async () => {
  const data = await getBlogs();

  // TODO: better ui for this:
  if (data?.blogs?.length === 0) return "no blogs";

  return (
    <>
      <PageHeading text="List" />
      <CustomBreadcrumb
        data={blogs_page_breadcrumb_data}
        breadcrumbPage="List"
      />
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/add-blog" className="gap-2">
            <PlusRegular />
            New blog
          </Link>
        </Button>
      </div>
      <BlogsList blogs={data?.blogs} />
    </>
  );
};

export default BlogsPage;

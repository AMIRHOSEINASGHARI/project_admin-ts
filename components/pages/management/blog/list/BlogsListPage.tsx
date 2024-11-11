// next
import Link from "next/link";
// actions
import { getBlogs } from "@/actions/blogs";
// constants
import { blogs_page_breadcrumb_data } from "@/constants/breadcrumbs";
// cmp
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import BlogsList from "./ui/BlogsList";
// icons
import { PlusRegular } from "@/components/svg";
import { BlogsListParams } from "@/types/blog";
import { Suspense } from "react";
import SuspenseFallback from "@/components/shared/SuspenseFallback";
import FilteringBlogs from "./ui/FilteringBlogs";

const BlogsListPage = async (props: {
  searchParams: Promise<BlogsListParams>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "";
  const status = searchParams?.status || "";

  return (
    <>
      <div className="flex justify-between gap-2 mb-10">
        <div>
          <PageHeading text="List" />
          <CustomBreadcrumb
            data={blogs_page_breadcrumb_data}
            breadcrumbPage="List"
            spaceBottom={0}
          />
        </div>
        <div className="flex justify-end mb-10">
          <Button asChild className="h-fit">
            <Link href="/add-blog" className="gap-2">
              <PlusRegular />
              New blog
            </Link>
          </Button>
        </div>
      </div>
      <FilteringBlogs />
      <Suspense fallback={<SuspenseFallback />}>
        <BlogsList searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default BlogsListPage;

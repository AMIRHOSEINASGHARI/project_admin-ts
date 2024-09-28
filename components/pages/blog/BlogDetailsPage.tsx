// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getBlog } from "@/actions/blogs";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import BlogHeadingActions from "./ui/BlogHeadingActions";

const BlogDetailsPage = async ({ id }: { id: string }) => {
  const data = await getBlog(id);

  if (!data?.blog) notFound();

  return (
    <View className="space-y-10">
      <div className="flex items-center justify-between">
        <Link href="/blogs" className="back-link">
          <SolarAltArrowLeftLineDuotone />
          <span>Back</span>
        </Link>
        <BlogHeadingActions id={id} published={true} />
      </div>
    </View>
  );
};

export default BlogDetailsPage;

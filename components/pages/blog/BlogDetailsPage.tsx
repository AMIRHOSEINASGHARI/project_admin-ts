// next
import Link from "next/link";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";

const BlogDetailsPage = ({ id }: { id: string }) => {
  return (
    <View className="space-y-10">
      <div className="flex items-center justify-between">
        <Link href="/blogs" className="back-link">
          <SolarAltArrowLeftLineDuotone />
          <span>Back</span>
        </Link>
      </div>
    </View>
  );
};

export default BlogDetailsPage;

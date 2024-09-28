// next
import Image from "next/image";
// types
import { BlogType } from "@/types/blog";
// cmp
import { Separator } from "@/components/ui/separator";
import View from "@/components/shared/layout/View";
import TagsSection from "./TagsSection";
import LikesSection from "./LikesSection";
import AddComment from "./AddComment";
import CommentsSection from "./CommentsSection";

const BlogInformations = ({
  blog: { title, cover, content, description, tags },
}: {
  blog: BlogType;
}) => {
  return (
    <View orientation="vertical">
      <div className="mb-[70px] w-full h-[65vh] rounded-card overflow-hidden relative">
        <Image
          src={cover}
          width={1920}
          height={1080}
          alt="blog"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 px-6">
          <h3 className="h3 text-white pt-[64px] lg:w-1/2">{title}</h3>
        </div>
      </div>
      <View className="max-w-[670px] mx-auto" orientation="vertical">
        <p className="paragraph">{description}</p>
        <div
          className="tiptap"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <Separator />
        <TagsSection tags={tags} />
        <LikesSection />
        <Separator />
        <AddComment />
        <Separator />
        <CommentsSection />
      </View>
    </View>
  );
};

export default BlogInformations;

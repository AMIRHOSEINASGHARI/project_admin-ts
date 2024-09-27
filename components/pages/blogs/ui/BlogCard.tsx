// next
import Image from "next/image";
import Link from "next/link";
// types
import { BlogType } from "@/types/blog";
// constants
import { images } from "@/constants";
// cmp
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import moment from "moment";
// icons
import {
  SolarChatRoundDotsBoldDuotone,
  SolarLikeBoldDuotone,
  SolarOverflowMenuVertical,
  SolarShareBoldDuotone,
} from "@/components/svg";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const {
    _id,
    cover,
    title,
    description,
    published,
    likes,
    createdAt,
    createdBy,
  } = blog;

  return (
    <Card
      className="flex justify-between gap-5"
      style={{
        padding: 0,
      }}
    >
      <div className="p-card sm:pr-0 md:pr-card lg:pr-0 w-full flex flex-col justify-between gap-[16px] overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <Badge variant={published ? "blue" : "gray"}>
            {published ? "Published" : "Draft"}
          </Badge>
          <span className="text_disabled">
            {moment(createdAt).format("ll")}
          </span>
        </div>
        <Link href={`/blogs/${_id}`} className="hover:underline">
          <p className="card_title line-clamp-2">{title}</p>
        </Link>
        <p className="card_description line-clamp-2">{description}</p>
        <div className="flex items-center justify-between w-full">
          <Button variant="icon">
            <SolarOverflowMenuVertical className="transform rotate-90" />
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <SolarChatRoundDotsBoldDuotone className="text-icon-light dark:text-icon-dark" />
              <span className="text_disabled">1.95k</span>
            </div>
            <div className="flex items-center gap-1">
              <SolarLikeBoldDuotone className="text-icon-light dark:text-icon-dark" />
              <span className="text_disabled">{likes?.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <SolarShareBoldDuotone className="text-icon-light dark:text-icon-dark" />
              <span className="text_disabled">9.12k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex md:hidden lg:flex h-full p-2">
        <div className="rounded-card relative w-[164px] h-full overflow-hidden">
          <Image
            src={cover}
            width={200}
            height={200}
            alt="Blog image"
            priority
            className="w-full h-full object-cover"
          />
          <Image
            src={createdBy?.avatar || images.admin}
            width={80}
            height={80}
            alt="Creator"
            priority
            className="w-[40px] h-[40px] rounded-full absolute top-2 right-2"
          />
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;

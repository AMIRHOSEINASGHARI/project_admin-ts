// cmp
import { Badge } from "@/components/ui/badge";

const TagsSection = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((item) => (
        <Badge key={item} variant="gray">
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default TagsSection;

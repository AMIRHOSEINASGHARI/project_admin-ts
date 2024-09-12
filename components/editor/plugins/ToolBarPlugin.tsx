"use client";

// icons
import {
  MingcuteAlignCenterLine,
  MingcuteAlignJustifyLine,
  MingcuteAlignLeftLine,
  MingcuteAlignRightLine,
  MingcuteListCheckLine,
  MingcuteListOrderedLine,
  OcticonBold24,
  TablerItalic,
  TablerStrikethrough,
  TablerUnderline,
} from "@/components/svg";
// cmp
import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const ToolBarPlugin = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 flex-wrap">
        <Select defaultValue="Paragraph">
          <SelectTrigger className="h-[35px] w-[130px] rounded-md bg-transparent dark:bg-transparent dark:text-light3 text-sm">
            <SelectValue placeholder="Paragraph" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Paragraph">Paragraph</SelectItem>
            <SelectItem value="Heading 1" className="font-bold text-[18px]">
              Heading 1
            </SelectItem>
            <SelectItem value="Heading 2" className="font-bold text-[17px]">
              Heading 2
            </SelectItem>
            <SelectItem value="Heading 3" className="font-bold text-[16px]">
              Heading 3
            </SelectItem>
            <SelectItem value="Heading 4" className="font-bold text-[15px]">
              Heading 4
            </SelectItem>
            <SelectItem value="Heading 5" className="font-bold text-[14px]">
              Heading 5
            </SelectItem>
            <SelectItem value="Heading 6" className="font-bold text-[13px]">
              Heading 6
            </SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <OcticonBold24 className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <TablerItalic className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <TablerUnderline className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <TablerStrikethrough className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <MingcuteListCheckLine className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <MingcuteListOrderedLine className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <MingcuteAlignLeftLine className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <MingcuteAlignCenterLine className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <MingcuteAlignRightLine className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <MingcuteAlignJustifyLine className="text-lg" />
        </Toggle>
      </div>
    </div>
  );
};

export default ToolBarPlugin;

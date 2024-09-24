"use client";

// react
import { useEffect, useState } from "react";
// types
import { HeadingNodes } from "@/types/shared";
// constants
import { editor_selectHeadingNodes } from "@/constants";
// Tiptap
import { type Editor } from "@tiptap/react";
// icons
import {
  EditorSetAlignCenter,
  EditorSetJustify,
  EditorSetAlignLeft,
  EditorSetAlignRight,
  EditorSetBulletList,
  EditorSetOrderedList,
  EditorSetBold,
  EditorSetItalic,
  EditorSetStrikethrough,
  EditorSetUnderline,
  EditorSetFullscreen,
  EditorSetExitFullscreen,
  EditorSetLink,
  EditorSetUnlink,
  EditorSetClearNodes,
  EditorSetHardBreak,
} from "@/components/svg";
// cmp
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import clsx from "clsx";

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  const [headingNode, setHeadingNode] = useState<"paragraph" | HeadingNodes>(
    "paragraph"
  );

  useEffect(() => {
    if (editor?.isActive("paragraph")) {
      setHeadingNode("paragraph");
    } else if (editor?.getAttributes("heading")?.level) {
      setHeadingNode(editor?.getAttributes("heading")?.level);
    }
  }, [editor?.getJSON()]);

  if (!editor) return null;

  const onValueChange = (value: any) => {
    if (value === "paragraph") {
      editor.commands.setParagraph();
    } else {
      const level = parseInt(value, 10) as HeadingNodes;
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 flex-wrap">
        <Select
          defaultValue="paragraph"
          onValueChange={onValueChange}
          value={String(headingNode)}
        >
          <SelectTrigger className="h-[35px] w-[130px] rounded-md bg-transparent dark:bg-transparent dark:text-light3 text-sm">
            <SelectValue placeholder="Paragraph" />
          </SelectTrigger>
          <SelectContent>
            {editor_selectHeadingNodes.map((item) => (
              <SelectItem
                key={item.value}
                value={String(item.value)}
                className={clsx(item.value !== "paragraph" && item.className)}
              >
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <EditorSetBold className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <EditorSetItalic className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <EditorSetUnderline className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <EditorSetStrikethrough className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <EditorSetBulletList className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <EditorSetOrderedList className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm">
          <EditorSetAlignLeft className="text-lg" />
        </Toggle>
        <Toggle size="sm">
          <EditorSetAlignCenter className="text-lg" />
        </Toggle>
        <Toggle size="sm" data-state="off">
          <EditorSetAlignRight className="text-lg" />
        </Toggle>
        <Toggle size="sm" data-state="off">
          <EditorSetJustify className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm" data-state="off">
          <EditorSetLink className="text-lg" />
        </Toggle>
        <Toggle size="sm" data-state="off">
          <EditorSetUnlink className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm" data-state="off">
          <EditorSetHardBreak className="text-lg" />
        </Toggle>
        <Toggle size="sm" data-state="off">
          <EditorSetClearNodes className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle size="sm" data-state="off">
          <EditorSetFullscreen className="text-lg" />
        </Toggle>
      </div>
    </div>
  );
};

export default EditorToolbar;

"use client";

// react
import { Fragment, useEffect, useState } from "react";
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

  const onValueChange = (value: any) => {
    if (value === "paragraph") {
      editor?.commands?.setParagraph();
    } else {
      const level = parseInt(value, 10) as HeadingNodes;
      editor?.chain().focus().toggleHeading({ level }).run();
    }
  };

  if (!editor) return null;

  const extensions = [
    {
      node: "bold",
      icon: <EditorSetBold className="text-lg" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      seprator: false,
    },
    {
      node: "italic",
      icon: <EditorSetItalic className="text-lg" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      seprator: false,
    },
    {
      node: "underline",
      icon: <EditorSetUnderline className="text-lg" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
      seprator: false,
    },
    {
      node: "strike",
      icon: <EditorSetStrikethrough className="text-lg" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      seprator: true,
    },
    {
      node: "bulletList",
      icon: <EditorSetBulletList className="text-lg" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
      seprator: false,
    },
    {
      node: "orderedList",
      icon: <EditorSetOrderedList className="text-lg" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      seprator: true,
    },
    {
      node: "align-left",
      icon: <EditorSetAlignLeft className="text-lg" />,
      onClick: () => editor.commands.setTextAlign("left"),
      isActive: editor.isActive({ textAlign: "left" }),
      seprator: false,
    },
    {
      node: "align-center",
      icon: <EditorSetAlignCenter className="text-lg" />,
      onClick: () => editor.commands.setTextAlign("center"),
      isActive: editor.isActive({ textAlign: "center" }),
      seprator: false,
    },
    {
      node: "align-right",
      icon: <EditorSetAlignRight className="text-lg" />,
      onClick: () => editor.commands.setTextAlign("right"),
      isActive: editor.isActive({ textAlign: "right" }),
      seprator: false,
    },
    {
      node: "justify",
      icon: <EditorSetJustify className="text-lg" />,
      onClick: () => editor.commands.setTextAlign("justify"),
      isActive: editor.isActive({ textAlign: "justify" }),
      seprator: true,
    },
    {
      node: "link",
      icon: <EditorSetLink className="text-lg" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("link"),
      seprator: false,
    },
    {
      node: "unlink",
      icon: <EditorSetUnlink className="text-lg" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("unlink"),
      seprator: true,
    },
    {
      node: "break",
      icon: <EditorSetHardBreak className="text-lg" />,
      onClick: () => editor.commands.setHardBreak(),
      isActive: false,
      seprator: false,
    },
    {
      node: "clear",
      icon: <EditorSetClearNodes className="text-lg" />,
      onClick: () => editor.commands.clearNodes(),
      isActive: false,
      seprator: true,
    },
  ];

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
        {extensions.map((item) => (
          <Fragment key={item.node}>
            <Toggle
              size="sm"
              data-state={item.isActive ? "on" : "off"}
              onClick={item.onClick}
            >
              {item.icon}
            </Toggle>
            {item.seprator && (
              <Separator orientation="vertical" className="h-[20px]" />
            )}
          </Fragment>
        ))}
        <Toggle size="sm" data-state="off">
          <EditorSetFullscreen className="text-lg" />
        </Toggle>
      </div>
    </div>
  );
};

export default EditorToolbar;

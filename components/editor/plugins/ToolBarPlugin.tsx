"use client";

// react
import { useCallback, useEffect, useState } from "react";
// lexical
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from "@lexical/list";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, $isHeadingNode } from "@lexical/rich-text";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

const ToolBarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState("paragraph");
  const [headingNode, setHeadingNode] = useState("paragraph");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const onHeadingChange = (value: any) => {
    setHeadingNode(value);
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (value === "Paragraph") {
          $setBlocksType(selection, () => $createParagraphNode());
        } else {
          $setBlocksType(selection, () => $createHeadingNode(value));
        }
      }
    });
  };

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
          setHeadingNode(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      })
    );
  }, [editor, updateToolbar]);

  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 flex-wrap">
        <Select
          defaultValue="paragraph"
          value={headingNode}
          onValueChange={onHeadingChange}
        >
          <SelectTrigger className="h-[35px] w-[130px] rounded-md bg-transparent dark:bg-transparent dark:text-light3 text-sm">
            <SelectValue placeholder="Paragraph" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paragraph">Paragraph</SelectItem>
            <SelectItem value="h1" className="font-bold text-[18px]">
              Heading 1
            </SelectItem>
            <SelectItem value="h2" className="font-bold text-[17px]">
              Heading 2
            </SelectItem>
            <SelectItem value="h3" className="font-bold text-[16px]">
              Heading 3
            </SelectItem>
            <SelectItem value="h4" className="font-bold text-[15px]">
              Heading 4
            </SelectItem>
            <SelectItem value="h5" className="font-bold text-[14px]">
              Heading 5
            </SelectItem>
            <SelectItem value="h6" className="font-bold text-[13px]">
              Heading 6
            </SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle
          size="sm"
          data-state={isBold ? "on" : "off"}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
        >
          <OcticonBold24 className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state={isItalic ? "on" : "off"}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          }}
        >
          <TablerItalic className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state={isUnderline ? "on" : "off"}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          }}
        >
          <TablerUnderline className="text-lg " />
        </Toggle>
        <Toggle
          size="sm"
          data-state={isStrikethrough ? "on" : "off"}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
          }}
        >
          <TablerStrikethrough className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle
          size="sm"
          data-state={blockType === "ul" ? "on" : "off"}
          onClick={() => {
            if (blockType === "ul") {
              editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
            } else {
              editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
            }
          }}
        >
          <MingcuteListCheckLine className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state={blockType === "ol" ? "on" : "off"}
          onClick={() => {
            if (blockType === "ol") {
              editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
            } else {
              editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            }
          }}
        >
          <MingcuteListOrderedLine className="text-lg" />
        </Toggle>
        <Separator orientation="vertical" className="h-[20px]" />
        <Toggle
          size="sm"
          data-state="off"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          }}
        >
          <MingcuteAlignLeftLine className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state="off"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          }}
        >
          <MingcuteAlignCenterLine className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state="off"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          }}
        >
          <MingcuteAlignRightLine className="text-lg" />
        </Toggle>
        <Toggle
          size="sm"
          data-state="off"
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          }}
        >
          <MingcuteAlignJustifyLine className="text-lg" />
        </Toggle>
      </div>
    </div>
  );
};

export default ToolBarPlugin;

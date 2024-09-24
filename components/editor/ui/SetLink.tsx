"use client";

// react
import { useEffect, useState } from "react";
// Tiptap
import { type Editor } from "@tiptap/react";
// icons
import { EditorSetLink, EditorSetUnlink } from "@/components/svg";
// cmp
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SetLink = ({ editor }: { editor: Editor | null }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(editor?.getAttributes("link").href);

  useEffect(() => {
    const previousUrl = editor?.getAttributes("link").href;

    setUrl(previousUrl);
  }, [editor?.getAttributes("link").href]);

  const onOpenChange = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const linkHandler = () => {
    if (url?.trim()?.length === 0) {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }

    onClose();
  };

  return (
    <>
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Toggle
            size="sm"
            data-state={editor?.isActive("link") ? "on" : "off"}
          >
            <EditorSetLink className="text-lg" />
          </Toggle>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h1 className="bold-value-2">URL</h1>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Enter URL here..."
                className="h-[38px] min-w-[250px]"
                autoFocus={false}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button type="button" className="h-[38px]" onClick={linkHandler}>
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Toggle
        size="sm"
        data-state="off"
        onClick={() => editor?.commands.unsetLink()}
        disabled={!editor?.isActive("link")}
      >
        <EditorSetUnlink className="text-lg" />
      </Toggle>
    </>
  );
};

export default SetLink;

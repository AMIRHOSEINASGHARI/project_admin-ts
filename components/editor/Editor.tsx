"use client";

// Tiptap base
import { useEditor, EditorContent } from "@tiptap/react";
// Tiptap extensions
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";

import "./styles/editor-styles.css";
import EditorToolbar from "./plugins/EditorToolbar";

type EditorProps = {
  content: string;
  onFieldChange: (value: string) => void;
};

const Editor = ({ content, onFieldChange }: EditorProps) => {
  const editor = useEditor({
    content,
    editorProps: {
      attributes: {
        class:
          "bg-light2 dark:bg-dark3 p-[16px] min-h-[200px] overflow-auto max-h-[500px] focus:outline-none",
      },
    },
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something awesome …",
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "text-[13px]",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
    onUpdate({ editor }) {
      onFieldChange(editor.getHTML());
    },
  });

  return (
    <div className="border border-dashed border-border-light dark:border-border-dark overflow-hidden rounded-card">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
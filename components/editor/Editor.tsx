"use client";

// react
import { useState } from "react";
// lexical
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode } from "@lexical/rich-text";
// plugins
import OnChangePlugin from "./plugins/OnChangePlugin";
import ToolBarPlugin from "./plugins/ToolBarPlugin";
// theme
import { editorTheme } from ".";
import "./styles/editor-styles.css";

const Placeholder = () => (
  <div className="editor-placeholder">Write something awesome...</div>
);

function onError(error: any) {
  console.error(error);
}

const Editor = () => {
  const [editorState, setEditorState] = useState("");

  function onChange(editorState: any) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme: editorTheme,
    onError,
    nodes: [HeadingNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="rounded-card border border-dashed border-border-light dark:border-border-dark overflow-hidden">
        <ToolBarPlugin />
        <div className="relative bg-light1 min-h-[200px] dark:bg-dark3 p-4">
          <RichTextPlugin
            contentEditable={<ContentEditable className="focus:outline-none" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
};

export default Editor;

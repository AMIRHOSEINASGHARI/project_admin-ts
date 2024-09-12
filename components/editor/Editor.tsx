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
      <div className="rounded-card relative border border-dashed border-border-light dark:border-border-dark overflow-hidden">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="bg-light1 min-h-[200px] dark:bg-dark3 p-4 focus:outline-none" />
          }
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
};

export default Editor;

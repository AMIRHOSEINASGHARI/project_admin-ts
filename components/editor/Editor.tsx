"use client";

// react
import { useState } from "react";
// lexical
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
// plugins
import OnChangePlugin from "./plugins/OnChangePlugin";

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
    theme: {},
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;

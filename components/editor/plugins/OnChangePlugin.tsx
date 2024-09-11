// react
import { useEffect } from "react";
// lexical
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";

const OnChangePlugin = ({
  onChange,
}: {
  onChange: (value: EditorState) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);

  return null;
};

export default OnChangePlugin;

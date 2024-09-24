'use client';

type EditorProps = {
  content: string;
  onFieldChange: (value: string) => void;
};

const Editor = ({ content, onFieldChange }: EditorProps) => {
  return <div>Editor</div>;
};

export default Editor;

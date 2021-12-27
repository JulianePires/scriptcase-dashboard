import { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = {
  theme: "snow",
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
      [{ font: [] }],
      [{ size: [] }],
      [{ color: [] }, { background: [] }],
      ["blockquote", "code-block"],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ indent: "-1" }, { indent: "+1" }],
    ],
  },
  style: { height: "10.9rem", width: "100%" },
};

const TextEditor: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <QuillEditor
      theme={Editor.theme}
      modules={Editor.modules}
      value={value}
      onChange={setValue}
      style={Editor.style}
    />
  );
};

export default TextEditor;

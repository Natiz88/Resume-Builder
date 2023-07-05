import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Reactquill = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "background",
    "align",
    "size",
  ];
  const [value, setValue] = useState("");
  const handleContentChange = (content:string) => {
    setValue(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleContentChange}
        className="h-[100px] w-full md:w-[500px]"
        // style={{ height: "200px", width: "500px" }}
      />
    </div>
  );
};

export default Reactquill;
import React, { useState } from "react";
import "./style.scss";
import Upload from "./components/Upload";
import Preview from "./components/Preview";

const ImageEditor = () => {
  const [imageData, setImageData] = useState<string>("");

  return (
    <div className="image-editor-wrapper">
      <h3 className="font-bold text-center m-2 text-2xl">ImageEditor</h3>
      <Upload onUpload={(image) => setImageData(image)} />
      <Preview imageData={imageData} />
    </div>
  );
};

export default ImageEditor;

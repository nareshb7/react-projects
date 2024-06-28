import { Input } from "common/Components";
import React from "react";
import { UploadProps } from "../types";

const Upload = ({ onUpload }: UploadProps) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files?.length) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        onUpload(fileReader.result as string);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };
  return (
    <div>
      <h3 className="font-bold m-2 text-lg">Upload : </h3>
      <Input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default Upload;

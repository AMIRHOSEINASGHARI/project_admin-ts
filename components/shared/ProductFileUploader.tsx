"use client";

// react
import { Dispatch, SetStateAction } from "react";

type ProductFileUploaderProps = {
  onFieldChange: (value: string) => void;
  imageUrl: string[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const ProductFileUploader = ({
  onFieldChange,
  imageUrl,
  setFiles,
}: ProductFileUploaderProps) => {
  return <div>ProductFileUploader</div>;
};

export default ProductFileUploader;

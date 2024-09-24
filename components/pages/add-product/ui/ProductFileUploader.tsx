"use client";

// react
import { Dispatch, SetStateAction, useCallback, useState } from "react";
// next
import Image from "next/image";
// uploadthing
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
// utils / uploadthing
import { useUploadThing } from "@/utils/uploadthing";
// cmp
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import CustomTooltip from "@/components/shared/CustomTooltip";
import clsx from "clsx";
import toast from "react-hot-toast";
// icons
import { CrossRegular, SolarCloudUploadBoldDuotone } from "../../../svg";

type ProductFileUploaderProps = {
  onFieldChange: (value: File[] | string[]) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  images?: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
};

const ProductFileUploader = ({
  onFieldChange,
  files,
  setFiles,
  setImages,
}: ProductFileUploaderProps) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(acceptedFiles);
  }, []);

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "imageUploader",
    {
      onUploadBegin: () => {
        if (uploadProgress === 100) setUploadProgress(() => 0);
      },
      onClientUploadComplete: (data) => {
        toast.success("Uploaded successfully!");

        const imageUrls = data.map((file) => file.url);
        setImages(imageUrls);
        onFieldChange(imageUrls);
        setUploadProgress(null);
      },
      onUploadError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
      onUploadProgress: (progress) => {
        setUploadProgress(progress);
      },
    }
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const removeFile = (fileName: string) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(() => newFiles);
    onFieldChange(newFiles);
  };

  return (
    <div className="space-y-5">
      <div {...getRootProps()}>
        <Input {...getInputProps()} />
        <div className="p-5 text-center cursor-pointer hover:bg-light3 group dark:hover:bg-dark2 Transition bg-light2 rounded-card dark:bg-dark3 flex flex-col justify-center items-center min-h-[280px] border border-dashed border-b-border-light dark:border-border-dark">
          <SolarCloudUploadBoldDuotone className="lg:text-[120px] text-[50px] text-primary-1 group-hover:-translate-y-1 Transition" />
          <span className="text-lg font-semibold">Drop or select files</span>
          <p className="text-sm text-slate-500">
            Drop files here or click to{" "}
            <span className="text-primary-1 underline">browse</span> through
            your machine.
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {files.map((file) => (
              <div
                key={file.name}
                className="rounded-card overflow-hidden relative w-[78px] h-[78px]"
              >
                <CustomTooltip
                  trigger={
                    <Image
                      src={URL.createObjectURL(file)}
                      width={100}
                      height={100}
                      alt={file.name}
                      priority
                      onLoad={() =>
                        URL.revokeObjectURL(URL.createObjectURL(file))
                      } // Clean up memory
                      className="w-full h-full object-cover"
                    />
                  }
                  content={file.name}
                />
                <Button
                  type="button"
                  variant="icon"
                  className="absolute top-1 right-1 text-[8px] p-1 bg-black/50 rounded-full text-white dark:text-white"
                  onClick={() => removeFile(file.name)}
                >
                  <CrossRegular />
                </Button>
              </div>
            ))}
          </div>
          {isUploading ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="gray">{uploadProgress || 0}% completed</Badge>
                <span className="text-small">
                  Uploading {files?.length} files...
                </span>
              </div>
              <Progress
                value={uploadProgress}
                max={100}
                className="bg-primary-1 dark:bg-primary-1"
              />
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3">
              <span className="text-small">{files?.length} files</span>
              <Button
                type="button"
                variant="outline"
                className="py-1 px-2"
                onClick={() => {
                  setFiles(() => []);
                  onFieldChange([]);
                }}
              >
                Remove all
              </Button>
              <Button
                type="button"
                variant="default"
                className={clsx("gap-2 py-1 px-2 min-w-[70px]", {
                  "text-slate-400 bg-slate-200 hover:bg-slate-200 cursor-not-allowed":
                    isUploading,
                })}
                onClick={() => startUpload(files)}
                disabled={
                  isUploading || files?.length < 2 || files?.length > 10
                }
              >
                <SolarCloudUploadBoldDuotone className="text-icon-size text-white dark:text-black" />
                Upload
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductFileUploader;

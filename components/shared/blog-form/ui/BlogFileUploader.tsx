"use client";

// react
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
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
import clsx from "clsx";
import toast from "react-hot-toast";
// icons
import { CrossRegular, SolarCloudUploadBoldDuotone } from "../../../svg";

type BlogFileUploaderProps = {
  onFieldChange: (value: File[] | string) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  cover: string;
  setCover: Dispatch<SetStateAction<string>>;
};

const BlogFileUploader = ({
  cover,
  files,
  onFieldChange,
  setCover,
  setFiles,
}: BlogFileUploaderProps) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles]
  );

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "blogFileUploader",
    {
      onUploadBegin: () => {
        if (uploadProgress === 100) setUploadProgress(() => 0);
      },
      onClientUploadComplete: (data) => {
        toast.success("Uploaded successfully!");

        const imageUrl = data[0].url;
        setCover(imageUrl);
        setFiles([]);
        onFieldChange(imageUrl);
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

  const removeFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFiles([]);
    setCover("");
    onFieldChange("");
  };

  return (
    <div className="space-y-5">
      <div {...getRootProps()}>
        <Input {...getInputProps()} multiple={false} />
        <div
          className={clsx(
            (files.length > 0 || cover?.length !== 0) && "aspect-[2/1.2]",
            files.length === 0 &&
              cover?.length === 0 &&
              "hover:bg-light3 dark:hover:bg-dark2",
            "w-full h-full flex flex-col justify-center items-center p-2 text-center cursor-pointer group Transition bg-light2 rounded-card dark:bg-dark3 min-h-[280px] border border-dashed border-b-border-light dark:border-border-dark"
          )}
        >
          {files.length === 0 && cover?.length === 0 && (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <SolarCloudUploadBoldDuotone className="lg:text-[120px] text-[50px] text-primary-1 group-hover:-translate-y-1 Transition" />
              <span className="text-lg font-semibold">
                Drop or select files
              </span>
              <p className="text-sm text-slate-500">
                Drop files here or click to{" "}
                <span className="text-primary-1 underline">browse</span> through
                your machine.
              </p>
            </div>
          )}
          {files.length > 0 && (
            <div className="w-full h-full rounded-card overflow-hidden relative">
              <Image
                src={URL.createObjectURL(files[0])}
                width={500}
                height={500}
                alt={files[0].name}
                priority
                onLoad={() =>
                  URL.revokeObjectURL(URL.createObjectURL(files[0]))
                } // Clean up memory
                className="w-full h-full object-cover group-hover:opacity-80 Transition"
              />
              <Button
                type="button"
                variant="icon"
                className="absolute top-2 right-2 text-[13px] p-2 bg-black/50 rounded-full text-white dark:text-white"
                onClick={removeFile}
              >
                <CrossRegular />
              </Button>
            </div>
          )}
          {cover?.length !== 0 && (
            <div className="w-full h-full rounded-card overflow-hidden relative">
              <Image
                src={cover}
                width={500}
                height={500}
                alt="cover"
                priority
                className="w-full h-full object-cover group-hover:opacity-80 Transition"
              />
              <Button
                type="button"
                variant="icon"
                className="absolute top-2 right-2 text-[13px] p-2 bg-black/50 rounded-full text-white dark:text-white"
                onClick={removeFile}
              >
                <CrossRegular />
              </Button>
            </div>
          )}
        </div>
      </div>

      {isUploading && (
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
      )}
      {(files.length !== 0 || cover?.length !== 0) && (
        <div className="flex items-center justify-end">
          <Button
            type="button"
            variant="default"
            className="gap-2 py-1 px-2 min-w-[70px]"
            onClick={() => startUpload(files)}
            disabled={isUploading || files?.length === 0}
          >
            <SolarCloudUploadBoldDuotone className="text-icon-size text-white dark:text-black" />
            Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogFileUploader;

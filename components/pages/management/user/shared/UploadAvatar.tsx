"use client";

// react
import { useCallback, useEffect } from "react";
// next
import Image from "next/image";
// uploadthing
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
// utils / uploadthing
import { useUploadThing } from "@/utils/uploadthing";
// types
import { AvatarFileUploaderProps } from "@/types/components";
// icons
import { SolarCloudUploadBoldDuotone } from "@/components/svg";
// cmp
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const UploadAvatar = ({
  avatar,
  setAvatar,
  files,
  setFiles,
  onFieldChange,
  isVerified,
  setIsVerified,
}: AvatarFileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setAvatar("");
      setFiles(acceptedFiles);
      onFieldChange("");
    },
    [setFiles, setAvatar, onFieldChange]
  );

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "blogFileUploader",
    {
      onClientUploadComplete: (data) => {
        toast.success("Uploaded successfully!");

        const imageUrl = data[0].url;
        setAvatar(imageUrl);
        setFiles([]);
        onFieldChange(imageUrl);
      },
      onUploadError: (error) => {
        console.log(error);
        toast.error(error.message);
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

  useEffect(() => {
    if (files?.length !== 0) startUpload(files);
  }, [files, startUpload]);

  return (
    <Card className="w-full">
      <div {...getRootProps()} className="my-10">
        <Input {...getInputProps()} multiple={false} disabled={isUploading} />
        <div className="group flex flex-col w-full items-center justify-center gap-7 cursor-pointer">
          <div className="border border-border-light dark:border-border-dark w-[130px] h-[130px] rounded-full p-2 relative">
            {files.length === 0 && avatar?.length === 0 && (
              <div className="bg-light2 dark:bg-dark3 rounded-full flex gap-2 items-center flex-col justify-center w-full h-full">
                <SolarCloudUploadBoldDuotone className="text-icon-light dark:text-icon-dark text-[35px]" />
                <span className="text_disabled">Upload photo</span>
              </div>
            )}
            {files.length > 0 && (
              <Image
                src={URL.createObjectURL(files[0])}
                width={300}
                height={300}
                alt={files[0].name}
                priority
                onLoad={() =>
                  URL.revokeObjectURL(URL.createObjectURL(files[0]))
                } // Clean up memory
                className="w-full h-full rounded-full object-cover group-hover:opacity-80 Transition"
              />
            )}
            {avatar?.length !== 0 && (
              <Image
                src={avatar}
                width={300}
                height={300}
                alt="avatar"
                priority
                className="w-full h-full rounded-full object-cover group-hover:opacity-80 Transition"
              />
            )}
            {isUploading && (
              <div className="absolute inset-0 bg-white/80 dark:bg-black/80 w-full h-full flex justify-center items-center rounded-full">
                <Loader color="#000" />
              </div>
            )}
          </div>
          <span className="text_disabled text-center max-w-[200px]">
            Allowed *.jpeg, *.jpg, *.png, *.webp max size of 4 Mb
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="isVerified" className="flex flex-col gap-2">
            <span className="text-small font-semibold">Email verified</span>
            <p className="text-small text-[var(--text-disabled)] leading-5">
              Disabling this will automatically send the user a verification
              email
            </p>
          </Label>
          <Switch
            id="isVerified"
            className="data-[state=checked]:bg-primary-1 dark:data-[state=checked]:bg-primary-1 dark:data-[state=unchecked]:bg-slate-700"
            thumbClassName="dark:data-[state=checked]:bg-white dark:bg-white"
            checked={isVerified}
            onCheckedChange={(e) => setIsVerified(e)}
          />
        </div>
      </div>
    </Card>
  );
};

export default UploadAvatar;

// next
import { Metadata } from "next";
// cmp
import FileManagerPage from "@/components/pages/management/file-manager/FileManagerPage";

export const metadata: Metadata = {
  title: "File manager",
};

const FileManager = () => {
  return <FileManagerPage />;
};

export default FileManager;

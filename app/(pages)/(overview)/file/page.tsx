// next
import { Metadata } from "next";
// cmp
import FilePage from "@/components/pages/overview/file/FilePage";

export const metadata: Metadata = {
  title: "File",
};

const File = () => {
  return <FilePage />;
};

export default File;

// cmp
import View from "@/components/shared/layout/View";
import GoogleFilesCards from "./ui/GoogleFilesCards";
import DataActivity from "./ui/DataActivity";
import Folders from "./ui/Folders";
import RecentFiles from "./ui/RecentFiles";
import FilesSummary from "./ui/FilesSummary";

const FilePage = () => {
  return (
    <View orientation="vertical">
      <GoogleFilesCards />
      <View variant="flex-gap">
        <View orientation="vertical" className="w-full xl:w-[70%]">
          <DataActivity />
          <Folders />
          <RecentFiles />
        </View>
        <View orientation="vertical" className="w-full xl:w-[30%]">
          <FilesSummary />
        </View>
      </View>
    </View>
  );
};

export default FilePage;

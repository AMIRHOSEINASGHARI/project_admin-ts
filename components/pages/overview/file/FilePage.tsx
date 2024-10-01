// cmp
import View from "@/components/shared/layout/View";
import GoogleFilesCards from "./ui/GoogleFilesCards";
import DataActivity from "./ui/DataActivity";
import Folders from "./ui/Folders";
import RecentFiles from "./ui/RecentFiles";
import FilesSummary from "./ui/FilesSummary";
import UpgradePlan from "./ui/UpgradePlan";

const FilePage = () => {
  return (
    <View orientation="vertical">
      <GoogleFilesCards />
      <View variant="flex-gap">
        <View orientation="vertical">
          <DataActivity />
          <Folders />
          <RecentFiles />
        </View>
        <View orientation="vertical">
          <FilesSummary />
          <UpgradePlan />
        </View>
      </View>
    </View>
  );
};

export default FilePage;

// cmp
import View from "@/components/shared/layout/View";
import TotalBalance from "./ui/TotalBalance";
import BalanceStatistics from "./ui/BalanceStatistics";
import RecentTransitions from "./ui/RecentTransitions";
import CurrentBalance from "./ui/CurrentBalance";
import QuickTransfer from "./ui/QuickTransfer";

const BankingPage = () => {
  return (
    <View variant="flex-gap">
      <View className="w-full xl:w-[70%]" orientation="vertical">
        <TotalBalance />
        <BalanceStatistics />
        <RecentTransitions />
      </View>
      <View className="w-full xl:w-[30%]" orientation="vertical">
        <CurrentBalance />
        <QuickTransfer />
      </View>
    </View>
  );
};

export default BankingPage;

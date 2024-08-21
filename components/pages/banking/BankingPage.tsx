// cmp
import View from "@/components/shared/layout/View";
import TotalBalance from "./ui/TotalBalance";
import BalanceStatistics from "./ui/BalanceStatistics";
import RecentTransitions from "./ui/RecentTransitions";

const BankingPage = () => {
  return (
    <View variant="flex-gap">
      <View className="w-full xl:w-[70%]" orientation="vertical">
        <TotalBalance />
        <BalanceStatistics />
        <RecentTransitions />
      </View>
      <View className="w-full xl:w-[30%]" orientation="vertical">
        others
      </View>
    </View>
  );
};

export default BankingPage;

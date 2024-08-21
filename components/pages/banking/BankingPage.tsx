// cmp
import View from "@/components/shared/layout/View";
import TotalBalance from "./ui/TotalBalance";
import BalanceStatistics from "./ui/BalanceStatistics";

const BankingPage = () => {
  return (
    <View variant="flex-gap">
      <View className="w-full xl:w-[70%]" orientation="vertical">
        <TotalBalance />
        <BalanceStatistics />
      </View>
      <View className="w-full xl:w-[30%]" orientation="vertical">
        others
      </View>
    </View>
  );
};

export default BankingPage;

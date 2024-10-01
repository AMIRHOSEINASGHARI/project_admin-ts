// cmp
import View from "@/components/shared/layout/View";
import TotalBalance from "./ui/TotalBalance";
import BalanceStatistics from "./ui/BalanceStatistics";
import RecentTransitions from "./ui/RecentTransitions";
import CurrentBalance from "./ui/CurrentBalance";
import QuickTransfer from "./ui/QuickTransfer";
import Contacts from "./ui/Contacts";
import InviteFriends from "./ui/InviteFriends";

const BankingPage = () => {
  return (
    <View variant="flex-gap">
      <View className="w-full xl:w-[65%]" orientation="vertical">
        <TotalBalance />
        <BalanceStatistics />
        <RecentTransitions />
      </View>
      <View className="w-full xl:w-[35%]" orientation="vertical">
        <CurrentBalance />
        <QuickTransfer />
        <Contacts />
        <InviteFriends />
      </View>
    </View>
  );
};

export default BankingPage;

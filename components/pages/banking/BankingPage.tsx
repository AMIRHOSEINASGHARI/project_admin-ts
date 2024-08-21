// cmp
import View from "@/components/shared/layout/View";
import TotalBalance from "./ui/TotalBalance";

const BankingPage = () => {
  return (
    <View variant="flex-gap">
      <View className="w-full">
        <TotalBalance />
      </View>
    </View>
  );
};

export default BankingPage;

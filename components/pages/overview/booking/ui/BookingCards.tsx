// constant
import { bookingCards_cardsData } from "@/constants";
//cmp
import View from "@/components/shared/layout/View";
import { Card } from "@/components/ui/card";

const BookingCards = () => {
  return (
    <View className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      {bookingCards_cardsData.map((card) => (
        <Card
          key={card.title}
          className="min-w-[200px] flex flex-col items-start flex-1"
        >
          <div className="flex items-center justify-between w-full">
            <div className="space-y-2">
              <span className="text-small font-semibold text-slate-500">
                {card.title}
              </span>
              <div className="flex items-center gap-1">
                <div>{card.profitIcon}</div>
                <span className="text-small font-medium">{card.profit}</span>
              </div>
            </div>
            <span className="bold-value">{card.value}</span>
          </div>
        </Card>
      ))}
    </View>
  );
};

export default BookingCards;

// cmp
import View from "@/components/shared/layout/View";
import BookingCards from "./ui/BookingCards";
import TotalIncomes from "./ui/TotalIncomes";
import Statistics from "./ui/Statistics";
import ToursAvailable from "./ui/ToursAvailable";
import CustomerReviews from "./ui/CustomerReviews";

const BookingPage = () => {
  return (
    <View orientation="vertical">
      <BookingCards />
      <View className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <View orientation="vertical" className="w-full xl:col-span-2">
          <TotalIncomes />
          <Statistics />
        </View>
        <View orientation="vertical" className="w-full xl:col-span-1">
          <ToursAvailable />
          <CustomerReviews />
        </View>
      </View>
    </View>
  );
};

export default BookingPage;

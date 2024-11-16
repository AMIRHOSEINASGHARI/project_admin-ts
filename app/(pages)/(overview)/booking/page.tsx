// next
import { Metadata } from "next";
// cmp
import BookingPage from "@/components/pages/overview/booking/BookingPage";

export const metadata: Metadata = {
  title: "Booking",
};

const Booking = () => {
  return <BookingPage />;
};

export default Booking;

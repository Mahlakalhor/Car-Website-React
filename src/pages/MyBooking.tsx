import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Booking } from "../components/Booking";

export const MyBooking = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Booking />
      <Footer />
    </div>
  );
};
